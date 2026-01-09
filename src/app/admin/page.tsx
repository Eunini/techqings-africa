"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AlertCircle, Loader2 } from 'lucide-react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin2025';

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (password === ADMIN_PASSWORD) {
            // Store login state in sessionStorage
            sessionStorage.setItem('adminAuthenticated', 'true');
            router.push('/admin/dashboard');
        } else {
            setError('Invalid password');
            setLoading(false);
        }
    };

    return (
        <main className="pt-0">
            <Section className="bg-linear-to-br from-primary via-primary/80 to-purple-600 text-white text-center py-32 md:py-40 relative overflow-hidden min-h-screen flex items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="relative z-10 w-full px-4">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Admin Access</h1>
                        <p className="text-lg text-white/80 mb-12">Enter the admin password to view applicants</p>

                        <Card className="p-8 border border-slate-200 shadow-sm rounded-xl bg-white">
                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Admin Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-slate-900 font-bold"
                                        placeholder="Enter password"
                                        disabled={loading}
                                    />
                                </div>

                                {error && (
                                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 shadow-sm">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <p className="text-sm font-bold">{error}</p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-primary text-white hover:bg-primary/90 text-sm font-black uppercase tracking-[0.3em] shadow-md rounded-lg disabled:opacity-70"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin" /> Authenticating...
                                        </span>
                                    ) : (
                                        'Login'
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </main>
    );
}
