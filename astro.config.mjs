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
						{ label: 'How to create an account', slug: 'start/create_account' },
					
						{ label: 'Account setup process ', slug: 'start/account_setup' },
					],
				},
				{
					label: 'Projects and Tasks ',
					items:[{ label: 'How to create a project ', slug: 'project_and_task/create_project' },
					
						   { label: 'How to create a task  ', slug: 'project_and_task/create_task' },

						   { label: 'How to create a subtask', slug: 'project_and_task/create_subtask' },
					
						]
				},
				{
					label: 'Inviting Members',
						autogenerate: { directory: 'invite_members' },
				},

				{
					label: 'Task Management',
					items: [
						{ label: 'How to add or hide columns in the task list', link: '/task_management/1_how_to_add' },
						{
							label: 'How to create a new status', 
							items: [
								{ label: 'What is a status?', link: '/task_management/how_to_create_new_status' },
								{ label: 'How does it work?', link: '/task_management/how_to_create_new_status#how-does-it-work' },
								{ label: 'How to create a status', link: '/task_management/how_to_create_new_status#how-to-create-a-status' },
								{ label: 'How to change the order of statuses', link: '/task_management/how_to_create_new_status#how-to-change-the-order-of-statuses' },
							],
						},
						{ label: 'Task activity log', slug: 'task_management/task_activity' },
					],
				},

				{
					label: 'Phases in Worklenz ',
					items:[{ label: 'What is a phase? ', slug: 'phases_in_worklenz/what_is_phase' },
					
						   { label: 'How does it work?  ', slug: 'phases_in_worklenz/how_does_it_work' },

						   { label: 'How to create a phase', slug: 'phases_in_worklenz/how_to_create_phase' },
						]
				},
				{
					label: 'Labels in Worklenz ',
					items:[{ label: 'What is a label? ', slug: 'labels_in_worklenz/what_is_label' },
					
						   { label: 'How to create labels ', slug: 'labels_in_worklenz/how_to_create_label' },

						   { label: 'How to edit or delete labels ', slug: 'labels_in_worklenz/how_to_edit_or_delete' },

						]
				},
				{
					label: 'Task Views and Their Benefits',
					items:[{ label: 'Task list ', slug: 'task_view_and_their_benifits/task_list' },
					
						   { label: 'Kanban  ', slug: 'task_view_and_their_benifits/kanban' },

						   { label: 'Roadmap ', slug: 'task_view_and_their_benifits/roadmap' },

						]
				},
				{
					label: 'Workload Management ',
					items:[{ label: 'What is workload?  ', slug: 'workload_management/what_is_workload' },
					
						   { label: 'How to use the workload feature  ', slug: 'workload_management/how_to_use_the_workload' },

						]
				},
				{
					label: 'Project Insights  ',
					items:[{ label: 'What is "Project Insights" in Worklenz? ', slug: 'project_insights/what_is_project_insights' },
						]
				},
				{
					label: 'File Management',
					items:[{ label: 'How to attach files  ', slug: 'file_management/how_to_attach' },
					
						   { label: 'What is the "Files" section inside a project? ', slug: 'file_management/what_is_the_files' },

						]
				},
				{
					label: 'Team Communication in Worklenz',
					items:[{ label: 'Task comments   ', slug: 'team_communication/task_comments' },
					
						   { label: 'Project updates ', slug: 'team_communication/project_updates' },

						]
				},
				{
					label: 'Task Archiving ',
					items:[{ label: 'Benefits of archiving tasks  ', slug: 'task_archiving/benifit_of_archiving' },
					
						   { label: 'How to archive tasks  ', slug: 'task_archiving/how_to_archive_task' },
						]
				},
				{
					label: 'Bulk Actions on Tasks  ',
					items:[{ label: ' Bulk delete ', slug: 'bulk_action_on_task/bulk_delete' },
					
						   { label: 'Bulk update (status, priority, or phase)  ', slug: 'bulk_action_on_task/bulk_update' },

						   { label: 'Bulk assign  ', slug: 'bulk_action_on_task/bulk_update' },

						   { label: 'Bulk add labels ', slug: 'bulk_action_on_task/bulk_add_lable' },

						]
				},
				{
					label: 'Using Task Templates ',
					items:[{ label: 'How to create a task template   ', slug: 'using_task_template/how_to_create_task' },
					
						   { label: 'How to import a task template ', slug: 'using_task_template/how_to_import_task' },

						]
				},
				{
					label: 'Using Project Templates  ',
					items:[{ label: 'Types of project templates  ', slug: 'using_project_template/types_of_project' },
					
						   { label: 'How to create a project template   ', slug: 'using_project_template/how_to_create_project' },

						   { label: 'How to import a project template ', slug: 'using_project_template/how_to_import_project' },

						]
				},
				{
					label: 'Project Subscription ',
					items:[{ label: 'What is the "Subscribe" feature in Worklenz?  ', slug: 'project_subscription/what_is_the_subscribe' },

						]
				},
				{
					label: 'Home View in Worklenz   ',
					items:[{ label: ' What is the home view?  ', slug: 'home_view_in_worklenz/what_is_the_home_view' },
					
						   { label: 'What is the calendar section used for?  ', slug: 'home_view_in_worklenz/what_is-the_calander' },

						   { label: 'What is the to-do list? ', slug: 'home_view_in_worklenz/what_is_the_to_do_list' },

						   { label: 'How do "Assigned to me" and "Assigned by me" work? ', slug: 'home_view_in_worklenz/how_do_assign_to_me' },

						]
				},
				{
					label: 'Time Tracking ',
					items:[{ label: ' What is a time log?  ', slug: 'time_trackin/what_is_time_log' },
					
						   { label: 'How to log time using the timer  ', slug: 'time_trackin/how_to_log_time_using' },

						   { label: 'How to log time manually ', slug: 'time_trackin/how_to_log_time_manually' },

						   { label: 'Where to view time reports ', slug: 'time_trackin/where_to_view_time' },

						]
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
