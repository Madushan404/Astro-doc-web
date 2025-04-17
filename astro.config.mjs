// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	
	integrations: [
		starlight({
		  
		  title: {
			en: 'Worklenz',
			'zh-CN': '我的文档',
		  },
		  defaultLocale: 'en',
		  locales: {
			en: { label: 'English' },
			'zh-cn': { label: '简体中文', lang: 'zh-CN' },
		  },
		

			logo:{src:'./src/assets/logo.png',replacesTitle: true,},
			social: {
				github: 'https://github.com/Worklenz/worklenz',
			},
		 
			sidebar: [
				{
					label: 'Getting Started',
					translations: { 'zh-CN': '入门' },
					items: [
						{ label: 'How to create an account', translations: { 'zh-CN': '如何创建账户' }, slug: 'start/create-account' },
						{ label: 'Account setup process', translations: { 'zh-CN': '账户设置流程' }, slug: 'start/account-setup' },
					],
				},
				{
					label: 'Projects and Tasks',
					translations: { 'zh-CN': '项目与任务' },
					items: [
						{ label: 'How to create a project', translations: { 'zh-CN': '如何创建项目' }, slug: 'project-and-task/create-project' },
						{ label: 'How to create a task', translations: { 'zh-CN': '如何创建任务' }, slug: 'project-and-task/create-task' },
						{ label: 'How to create a subtask', translations: { 'zh-CN': '如何创建子任务' }, slug: 'project-and-task/create-subtask' },
					],
				},
				{
					label: 'Inviting Members',
					translations: { 'zh-CN': '邀请成员' },
					items: [
						{
							label: 'How to invite a new member', translations: { 'zh-CN': '如何邀请新成员' },
							items: [
								{ label: 'What is a team invitation and its privileges?', translations: { 'zh-CN': '什么是团队邀请及其特权？' }, link: 'invite-members/what-team' },
								{ label: 'What is a project invitation? ', translations: { 'zh-CN': '什么是项目邀请？' }, link: 'invite-members/what-project' },
							],
						},
					],
				},
				{
					label: 'Task Management',
					translations: { 'zh-CN': '任务管理' },
					items: [
						{ label: 'How to add or hide columns in the task list', translations: { 'zh-CN': '如何添加或隐藏任务列表中的列' }, link: 'task-management/how-to-add' },
						{
							label: 'How to create a new status',
							translations: { 'zh-CN': '如何创建新的状态' },
							items: [
								{ label: 'What is a status?', translations: { 'zh-CN': '什么是状态？' }, link: 'task-management/how-to-create-new-status' },
								{ label: 'How does it work?', translations: { 'zh-CN': '它是如何工作的？' }, link: 'task-management/how-to-create-new-status#how-does-it-work' },
								{ label: 'How to create a status', translations: { 'zh-CN': '如何创建状态' }, link: 'task-management/how-to-create-new-status#how-to-create-a-status' },
								{ label: 'How to change the order of statuses', translations: { 'zh-CN': '如何更改状态顺序' }, link: 'task-management/how-to-create-new-status#how-to-change-the-order-of-statuses' },
							],

						},
						{ label: 'Task activity log', translations: { 'zh-CN': '任务活动日志' }, slug: 'task-management/task-activity' },
					],
				},
				{
					label: 'Phases in Worklenz',
					translations: { 'zh-CN': 'Worklenz中的阶段' },
					items: [
						{ label: 'What is a phase?', translations: { 'zh-CN': '什么是阶段？' }, slug: 'phases-in-worklenz/what-is-phase' },
						{ label: 'How does it work?', translations: { 'zh-CN': '它是如何工作的？' }, slug: 'phases-in-worklenz/how-does-it-work' },
						{ label: 'How to create a phase', translations: { 'zh-CN': '如何创建阶段' }, slug: 'phases-in-worklenz/how-to-create-phase' },
					],
				},
				{
					label: 'Labels in Worklenz',
					translations: { 'zh-CN': 'Worklenz中的标签' },
					items: [
						{ label: 'What is a label?', translations: { 'zh-CN': '什么是标签？' }, slug: 'labels-in-worklenz/what-is-label' },
						{ label: 'How to create labels', translations: { 'zh-CN': '如何创建标签' }, slug: 'labels-in-worklenz/how-to-create-label' },
						{ label: 'How to edit or delete labels', translations: { 'zh-CN': '如何编辑或删除标签' }, slug: 'labels-in-worklenz/how-to-edit-or-delete' },
					],
				},
				{
					label: 'Task Views and Their Benefits',
					translations: { 'zh-CN': '任务视图及其优势' },
					items: [
						{ label: 'Task list', translations: { 'zh-CN': '任务列表' }, slug: 'task-view-and-their-benifits/task-list' },
						{ label: 'Kanban', translations: { 'zh-CN': '看板' }, slug: 'task-view-and-their-benifits/kanban' },
						{ label: 'Roadmap', translations: { 'zh-CN': '路线图' }, slug: 'task-view-and-their-benifits/roadmap' },
					],
				},
				{
					label: 'Workload Management',
					translations: { 'zh-CN': '工作量管理' },
					items: [
						{ label: 'What is workload?', translations: { 'zh-CN': '什么是工作量？' }, slug: 'workload-management/what-is-workload' },
						{ label: 'How to use the workload feature', translations: { 'zh-CN': '如何使用工作量功能' }, slug: 'workload-management/how-to-use-the-workload' },
					],
				},
				{
					label: 'Project Insights',
					translations: { 'zh-CN': '项目洞察' },
					items: [
						{ label: 'What is "Project Insights" in Worklenz?', translations: { 'zh-CN': 'Worklenz中的“项目洞察”是什么？' }, slug: 'project-insights/what-is-project-insights' },
					],
				},
				{
					label: 'File Management',
					translations: { 'zh-CN': '文件管理' },
					items: [
						{ label: 'How to attach files', translations: { 'zh-CN': '如何附加文件' }, slug: 'file-management/how-to-attach' },
						{ label: 'What is the "Files" section inside a project?', translations: { 'zh-CN': '项目中的“文件”部分是什么？' }, slug: 'file-management/what-is-the-files' },
					],
				},
				{
					label: 'Team Communication in Worklenz',
					translations: { 'zh-CN': 'Worklenz中的团队沟通' },
					items: [
						{ label: 'Task comments', translations: { 'zh-CN': '任务评论' }, slug: 'team-communication/task-comments' },
						{ label: 'Project updates', translations: { 'zh-CN': '项目更新' }, slug: 'team-communication/project-updates' },
					],
				},
				{
					label: 'Task Archiving',
					translations: { 'zh-CN': '任务归档' },
					items: [
						{ label: 'Benefits of archiving tasks', translations: { 'zh-CN': '归档任务的好处' }, slug: 'task-archiving/benifit-of-archiving' },
						{ label: 'How to archive tasks', translations: { 'zh-CN': '如何归档任务' }, slug: 'task-archiving/how-to-archive-task' },
					],
				},
				{
					label: 'Bulk Actions on Tasks',
					translations: { 'zh-CN': '任务的批量操作' },
					items: [
						{ label: 'Bulk delete', translations: { 'zh-CN': '批量删除' }, slug: 'bulk-action-on-task/bulk-delete' },
						{ label: 'Bulk update (status, priority, or phase)', translations: { 'zh-CN': '批量更新（状态、优先级或阶段）' }, slug: 'bulk-action-on-task/bulk-update' },
						{ label: 'Bulk assign', translations: { 'zh-CN': '批量分配' }, slug: 'bulk-action-on-task/bulkassign' },
						{ label: 'Bulk add labels', translations: { 'zh-CN': '批量添加标签' }, slug: 'bulk-action-on-task/bulk-add-lable' },
					],
				},
				{
					label: 'Using Task Templates',
					translations: { 'zh-CN': '使用任务模板' },
					items: [
						{ label: 'How to create a task template', translations: { 'zh-CN': '如何创建任务模板' }, slug: 'using-task-template/how-to-create-task' },
						{ label: 'How to import a task template', translations: { 'zh-CN': '如何导入任务模板' }, slug: 'using-task-template/how-to-import-task' },
					],
				},
				{
					label: 'Using Project Templates',
					translations: { 'zh-CN': '使用项目模板' },
					items: [
						{ label: 'Types of project templates', translations: { 'zh-CN': '项目模板的类型' }, slug: 'using-project-template/types-of-project' },
						{ label: 'How to create a project template', translations: { 'zh-CN': '如何创建项目模板' }, slug: 'using-project-template/how-to-create-project' },
						{ label: 'How to import a project template', translations: { 'zh-CN': '如何导入项目模板' }, slug: 'using-project-template/how-to-import-project' },
					],
				},
				{
					label: 'Project Subscription',
					translations: { 'zh-CN': '项目订阅' },
					items: [
						{ label: 'What is the "Subscribe" feature in Worklenz?', translations: { 'zh-CN': 'Worklenz中的“订阅”功能是什么？' }, slug: 'project-subscription/what-is-the-subscribe' },
					],
				},
				{
					label: 'Home View in Worklenz',
					translations: { 'zh-CN': 'Worklenz中的主页视图' },
					items: [
						{ label: 'What is the home view?', translations: { 'zh-CN': '什么是主页视图？' }, slug: 'home-view-in-worklenz/what-is-the-home-view' },
						{ label: 'What is the calendar section used for?', translations: { 'zh-CN': '日历部分的用途是什么？' }, slug: 'home-view-in-worklenz/what-is-the-calander' },
						{ label: 'What is the to-do list?', translations: { 'zh-CN': '什么是待办事项列表？' }, slug: 'home-view-in-worklenz/what-is-the-to-do-list' },
						{ label: 'How do "Assigned to me" and "Assigned by me" work?', translations: { 'zh-CN': '“分配给我”和“由我分配”是如何工作的？' }, slug: 'home-view-in-worklenz/how-do-assign-to-me' },
					],
				},
				{
					label: 'Time Tracking',
					translations: { 'zh-CN': '时间追踪' },
					items: [
						{ label: 'What is a time log?', translations: { 'zh-CN': '什么是时间记录？' }, slug: 'time-trackin/what-is-time-log' },
						{ label: 'How to log time using the timer', translations: { 'zh-CN': '如何使用计时器记录时间' }, slug: 'time-trackin/how-to-log-time-using' },
						{ label: 'How to log time manually', translations: { 'zh-CN': '如何手动记录时间' }, slug: 'time-trackin/how-to-log-time-manually' },
						{ label: 'Where to view time reports', translations: { 'zh-CN': '在哪里查看时间报告' }, slug: 'time-trackin/where-to-view-time' },
					],
			
			
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
