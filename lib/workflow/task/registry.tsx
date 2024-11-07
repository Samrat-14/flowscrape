import { TaskType } from '@/types/task';
import { WorkflowTask } from '@/types/workflow';

import { LaunchBrowserTask } from '@/lib/workflow/task/launch-browser';
import { PageToHtmlTask } from '@/lib/workflow/task/page-to-html';
import { ExtractTextFromElementTask } from '@/lib/workflow/task/extract-text-from-element';
import { FillInputTask } from '@/lib/workflow/task/fill-input';
import { ClickElementTask } from '@/lib/workflow/task/click-element';
import { WaitForElementTask } from '@/lib/workflow/task/wait-for-element';
import { DeliverViaWebhookTask } from '@/lib/workflow/task/deliver-via-webhook';

type Registry = {
  [K in TaskType]: WorkflowTask & { type: K };
};

export const TaskRegistry: Registry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
  FILL_INPUT: FillInputTask,
  CLICK_ELEMENT: ClickElementTask,
  WAIT_FOR_ELEMENT: WaitForElementTask,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookTask,
};
