"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Section from '@/components/ui/Section';
import { Loader2, Download, LogOut } from 'lucide-react';
import { fetchApplications } from '@/app/actions/admin';

interface Application {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    type: string;
    track?: string;
    sessionPreference?: string;
    timestamp?: string;
    [key: string]: unknown;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [applicants, setApplicants] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<'all' | 'learner' | 'mentor'>('all');

    useEffect(() => {
        // Check authentication
        const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true';
        if (!isAuthenticated) {
            router.push('/admin');
            return;
        }

        // Fetch applicants
        const loadApplicants = async () => {
            try {
                const result = await fetchApplications();
                if (result.success && result.data) {
                    setApplicants(result.data as Application[]);
                } else {
                    setError(result.error || 'Failed to load applicants');
                }
            } catch (err) {
                setError('An error occurred while loading applicants');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadApplicants();
    }, [router]);

    const filtered = applicants
        .filter((app) => {
            if (filterType !== 'all' && app.type !== filterType) return false;
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                return (
                    app.firstName.toLowerCase().includes(term) ||
                    app.lastName.toLowerCase().includes(term) ||
                    app.email.toLowerCase().includes(term)
                );
            }
            return true;
        });

    const handleLogout = () => {
        sessionStorage.removeItem('adminAuthenticated');
        router.push('/admin');
    };

    const exportCSV = () => {
        if (filtered.length === 0) return;

        const headers = [
            'First Name',
            'Last Name',
            'Email',
            'Phone',
            'Track',
            'Session Preference',
            'Has PC',
            'Has Internet',
            'Occupation',
            'Years Experience',
            'Mentor Bio',
            'Expertise',
            'Mentee Capacity',
            'Years in Tech',
            'Years Mentoring',
            'Motivation',
            'Type',
            'Applied Date',
        ];

        const rows = filtered.map((app) => [
            app.firstName,
            app.lastName,
            app.email,
            app.phone,
            ((app as unknown) as Record<string, unknown>).track || 'N/A',
            app.sessionPreference || 'N/A',
            ((app as unknown) as Record<string, unknown>).hasPC || 'N/A',
            ((app as unknown) as Record<string, unknown>).hasInternet || 'N/A',
            ((app as unknown) as Record<string, unknown>).occupation || 'N/A',
            ((app as unknown) as Record<string, unknown>).yearsExperience || 'N/A',
            ((app as unknown) as Record<string, unknown>).mentorBio || 'N/A',
            ((app as unknown) as Record<string, unknown>).expertise || 'N/A',
            ((app as unknown) as Record<string, unknown>).menteeCapacity || 'N/A',
            ((app as unknown) as Record<string, unknown>).yearsInTech || 'N/A',
            ((app as unknown) as Record<string, unknown>).yearsMentoring || 'N/A',
            ((app as unknown) as Record<string, unknown>).motivation || 'N/A',
            app.type,
            app.timestamp ? new Date(app.timestamp).toLocaleDateString() : 'N/A',
        ]);

        const csv = [
            headers.join(','),
            ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
        ].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `applicants-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    if (loading) {
        return (
            <Section className="min-h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p className="text-slate-600 font-medium">Loading applicants...</p>
                </div>
            </Section>
        );
    }

    return (
        <main className="bg-slate-50 min-h-screen py-8">
            <Section className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 uppercase mb-2">Admin Dashboard</h1>
                        <p className="text-slate-600 font-medium">Total Applications: <span className="text-primary font-black">{applicants.length}</span></p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={exportCSV}
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-black uppercase text-sm hover:bg-primary/90 transition-all shadow-sm"
                        >
                            <Download className="w-5 h-5" />
                            Export CSV
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-black uppercase text-sm hover:bg-slate-300 transition-all shadow-sm"
                        >
                            <LogOut className="w-5 h-5" />
                            Logout
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg font-medium">
                        {error}
                    </div>
                )}

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-slate-200">
                    <div className="flex-1">
                        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Search</label>
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Filter Type</label>
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value as 'all' | 'learner' | 'mentor')}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-bold"
                        >
                            <option value="all">All Applications</option>
                            <option value="learner">Learners Only</option>
                            <option value="mentor">Mentors Only</option>
                        </select>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Total</p>
                        <p className="text-3xl font-black text-slate-900">{filtered.length}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Learners</p>
                        <p className="text-3xl font-black text-primary">{filtered.filter((a) => a.type === 'learner').length}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Mentors</p>
                        <p className="text-3xl font-black text-purple-600">{filtered.filter((a) => a.type === 'mentor').length}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Showing</p>
                        <p className="text-3xl font-black text-slate-600">{filtered.length}/{applicants.length}</p>
                    </div>
                </div>

                {/* Table */}
                {filtered.length > 0 ? (
                    <div className="overflow-x-auto rounded-lg border border-slate-200">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200">
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Name</th>
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Email</th>
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Phone</th>
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Type</th>
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Track</th>
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Session</th>
                                    <th className="px-6 py-4 text-left font-black uppercase tracking-widest text-slate-600">Applied</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((app, idx) => (
                                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-slate-900">{app.firstName} {app.lastName}</td>
                                        <td className="px-6 py-4 text-slate-600 text-xs font-medium">{app.email}</td>
                                        <td className="px-6 py-4 text-slate-600 text-xs font-medium">{app.phone}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                                                app.type === 'learner'
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'bg-purple-100 text-purple-700'
                                            }`}>
                                                {app.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-slate-700">{String(((app as unknown) as Record<string, unknown>).track || 'N/A')}</td>
                                        <td className="px-6 py-4 text-slate-600 text-xs font-medium">{app.sessionPreference || 'N/A'}</td>
                                        <td className="px-6 py-4 text-slate-500 text-xs font-medium">
                                            {app.timestamp ? new Date(app.timestamp).toLocaleDateString() : 'N/A'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-500 font-medium mb-2">No applicants found</p>
                        <p className="text-slate-400 text-sm">Try adjusting your filters</p>
                    </div>
                )}
            </Section>
        </main>
    );
}
