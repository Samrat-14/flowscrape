import { LaunchBrowserTask } from '@/lib/workflow/task/launch-browser';
import { PageToHtmlTask } from '@/lib/workflow/task/page-to-html';
import { ExtractTextFromElementTask } from '@/lib/workflow/task/extract-text-from-element';

export const TaskRegistry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
};
