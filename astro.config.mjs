// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs with Tailwind',
			logo:{src:'./src/assets/logo.png',replacesTitle: true,},
			social: {
				github: 'https://github.com/Worklenz/worklenz',
			},
		 
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How to create an account', slug: 'start/create-account' },
					
						{ label: 'Account setup process ', slug: 'start/account-setup' },
					],
				},
				{
					label: 'Projects and Tasks ',
					items:[{ label: 'How to create a project ', slug: 'project-and-task/create-project' },
					
						   { label: 'How to create a task  ', slug: 'project-and-task/create-task' },

						   { label: 'How to create a subtask', slug: 'project-and-task/create-subtask' },
					
						]
				},
				{
					label: 'Inviting Members',
						autogenerate: { directory: 'invite-members' },
				},

				{
					label: 'Task Management',
					items: [
						{ label: 'How to add or hide columns in the task list', link: '/task-management/how-to-add' },
						{
							label: 'How to create a new status', 
							items: [
								{ label: 'What is a status?', link: '/task-management/how-to-create-new-status' },
								{ label: 'How does it work?', link: '/task-management/how-to-create-new-status#how-does-it-work' },
								{ label: 'How to create a status', link: '/task-management/how-to-create-new-status#how-to-create-a-status' },
								{ label: 'How to change the order of statuses', link: '/task-management/how-to-create-new-status#how-to-change-the-order-of-statuses' },
							],
						},
						{ label: 'Task activity log', slug: 'task-management/task-activity' },
					],
				},

				{
					label: 'Phases in Worklenz ',
					items:[{ label: 'What is a phase? ', slug: 'phases-in-worklenz/what-is-phase' },
					
						   { label: 'How does it work?  ', slug: 'phases-in-worklenz/how-does-it-work' },

						   { label: 'How to create a phase', slug: 'phases-in-worklenz/how-to-create-phase' },
						]
				},
				{
					label: 'Labels in Worklenz ',
					items:[{ label: 'What is a label? ', slug: 'labels-in-worklenz/what-is-label' },
					
						   { label: 'How to create labels ', slug: 'labels-in-worklenz/how-to-create-label' },

						   { label: 'How to edit or delete labels ', slug: 'labels-in-worklenz/how-to-edit-or-delete' },

						]
				},
				{
					label: 'Task Views and Their Benefits',
					items:[{ label: 'Task list ', slug: 'task-view-and-their-benifits/task-list' },
					
						   { label: 'Kanban  ', slug: 'task-view-and-their-benifits/kanban' },

						   { label: 'Roadmap ', slug: 'task-view-and-their-benifits/roadmap' },

						]
				},
				{
					label: 'Workload Management ',
					items:[{ label: 'What is workload?  ', slug: 'workload-management/what-is-workload' },
					
						   { label: 'How to use the workload feature  ', slug: 'workload-management/how-to-use-the-workload' },

						]
				},
				{
					label: 'Project Insights  ',
					items:[{ label: 'What is "Project Insights" in Worklenz? ', slug: 'project-insights/what-is-project-insights' },
						]
				},
				{
					label: 'File Management',
					items:[{ label: 'How to attach files  ', slug: 'file-management/how-to-attach' },
					
						   { label: 'What is the "Files" section inside a project? ', slug: 'file-management/what-is-the-files' },

						]
				},
				{
					label: 'Team Communication in Worklenz',
					items:[{ label: 'Task comments   ', slug: 'team-communication/task-comments' },
					
						   { label: 'Project updates ', slug: 'team-communication/project-updates' },

						]
				},
				{
					label: 'Task Archiving ',
					items:[{ label: 'Benefits of archiving tasks  ', slug: 'task-archiving/benifit-of-archiving' },
					
						   { label: 'How to archive tasks  ', slug: 'task-archiving/how-to-archive-task' },
						]
				},
				{
					label: 'Bulk Actions on Tasks  ',
					items:[{ label: ' Bulk delete ', slug: 'bulk-action-on-task/bulk-delete' },
					
						   { label: 'Bulk update (status, priority, or phase)  ', slug: 'bulk-action-on-task/bulk-update' },

						   { label: 'Bulk assign  ', slug: 'bulk-action-on-task/bulk-update' },

						   { label: 'Bulk add labels ', slug: 'bulk-action-on-task/bulk-add-lable' },

						]
				},
				{
					label: 'Using Task Templates ',
					items:[{ label: 'How to create a task template   ', slug: 'using-task-template/how-to-create-task' },
					
						   { label: 'How to import a task template ', slug: 'using-task-template/how-to-import-task' },

						]
				},
				{
					label: 'Using Project Templates  ',
					items:[{ label: 'Types of project templates  ', slug: 'using-project-template/types-of-project' },
					
						   { label: 'How to create a project template   ', slug: 'using-project-template/how-to-create-project' },

						   { label: 'How to import a project template ', slug: 'using-project-template/how-to-import-project' },

						]
				},
				{
					label: 'Project Subscription ',
					items:[{ label: 'What is the "Subscribe" feature in Worklenz?  ', slug: 'project-subscription/what-is-the-subscribe' },

						]
				},
				{
					label: 'Home View in Worklenz   ',
					items:[{ label: ' What is the home view?  ', slug: 'home-view-in-worklenz/what-is-the-home-view' },
					
						   { label: 'What is the calendar section used for?  ', slug: 'home-view-in-worklenz/what-is-the-calander' },

						   { label: 'What is the to-do list? ', slug: 'home-view-in-worklenz/what-is-the-to-do-list' },

						   { label: 'How do "Assigned to me" and "Assigned by me" work? ', slug: 'home-view-in-worklenz/how-do-assign-to-me' },

						]
				},
				{
					label: 'Time Tracking ',
					items:[{ label: ' What is a time log?  ', slug: 'time-trackin/what-is-time-log' },
					
						   { label: 'How to log time using the timer  ', slug: 'time-trackin/how-to-log-time-using' },

						   { label: 'How to log time manually ', slug: 'time-trackin/how-to-log-time-manually' },

						   { label: 'Where to view time reports ', slug: 'time-trackin/where-to-view-time' },

						]
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
