'use client';

import React from 'react';
import ResumeComponentApp from '@/components/dashboard/resume-component';
import JobListings from '@/components/dashboard/job-listings'; // Import the new component
import ResumeAnalysis from '@/components/dashboard/resume-analysis'; // Import the new ResumeAnalysis component
import BackgroundContainer from '@/components/common/background-container';

// Define the AnalyzedJobData type, mirroring the one in job-listings.tsx
// This is important for the handleJobUpload function's return type.
interface AnalyzedJobData {
	title: string;
	company: string;
	location: string;
}

export default function DashboardPage() {
	const handleJobUpload = async (text: string): Promise<AnalyzedJobData | null> => {
		// Handle the job upload logic here
		console.log('Job text uploaded for analysis:', text);
		// Simulate API call or analysis logic
		// Replace this with your actual implementation
		return new Promise((resolve) => {
			setTimeout(() => {
				// Example: Simulate successful analysis
				if (text.length > 10) {
					// Arbitrary condition for success
					resolve({
						title: 'Software Engineer (Analyzed)',
						company: 'Tech Solutions Inc. (Analyzed)',
						location: 'Remote (Analyzed)',
					});
				} else {
					// Example: Simulate analysis failure or no data found
					resolve(null);
				}
			}, 1000); // Simulate network delay
		});
	};

	return (
		<BackgroundContainer
			className="min-h-screen"
			innerClassName="bg-zinc-950 backdrop-blur-sm overflow-auto"
		>
			<div className="w-full h-full overflow-auto py-8 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="mb-10">
						<h1 className="text-3xl font-semibold pb-2 text-white">
							Your{' '}
							<span className="bg-gradient-to-r from-pink-400  to-purple-400 text-transparent bg-clip-text">
								Resume Matcher
							</span>{' '}
							Dashboard
						</h1>
						<p className="text-gray-300 text-lg">
							Manage your resume and analyze its match with job descriptions.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-8">
						{/* Left Column: Job Listings */}
						<div className="w-1/3">
							{/* Use the new JobListings component and pass the onUploadJob prop */}
							<JobListings onUploadJob={handleJobUpload} />
							{/* Resume Analysis Section - Placed below Job Listings */}
							<div className="mt-8">
								<ResumeAnalysis />
							</div>
						</div>

						{/* Right Column: Resume Display */}
						<div className="w-full md:w-2/3">
							<div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg shadow-xl h-full flex flex-col border border-gray-800/50">
								<div className="mb-6">
									<h1 className="text-3xl font-bold text-white mb-1">
										Your Resume
									</h1>
									<p className="text-gray-400 text-sm">
										This is your resume. Update it via the resume upload page.
									</p>
								</div>
								{/* Ensure ResumeComponentApp can fit well or handle its own scrolling */}
								<div className="flex-grow rounded-md overflow-hidden">
									<ResumeComponentApp />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BackgroundContainer>
	);
}
