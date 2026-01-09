"use server";

import { getAllApplications } from '@/lib/google-sheets';

export async function fetchApplications() {
    try {
        const applications = await getAllApplications();
        return { success: true, data: applications };
    } catch (error) {
        console.error('Error fetching applications:', error);
        return { success: false, error: 'Failed to fetch applications' };
    }
}
