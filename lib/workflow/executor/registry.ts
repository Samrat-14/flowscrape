import { ExecutionEnvironment } from '@/types/executor';
import { TaskType } from '@/types/task';
import { WorkflowTask } from '@/types/workflow';

import { LaunchBrowserExecutor } from '@/lib/workflow/executor/launch-browser-executor';
import { PageToHtmlExecutor } from '@/lib/workflow/executor/page-to-html-executor';
import { ExtractTextFromElementExecutor } from '@/lib/workflow/executor/extract-text-from-element-executor';
import { FillInputExecutor } from '@/lib/workflow/executor/fill-input-executor';
import { ClickElementExecutor } from '@/lib/workflow/executor/click-element-executor';
import { WaitForElementExecutor } from '@/lib/workflow/executor/wsit-for-element-executor';
import { DeliverViaWebhookExecutor } from '@/lib/workflow/executor/deliver-via-webhook-executor';

type ExecuterFn<T extends WorkflowTask> = (environment: ExecutionEnvironment<T>) => Promise<boolean>;

type RegistryType = {
  [K in TaskType]: ExecuterFn<WorkflowTask & { type: K }>;
};

export const ExecutorRegistry: RegistryType = {
  LAUNCH_BROWSER: LaunchBrowserExecutor,
  PAGE_TO_HTML: PageToHtmlExecutor,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementExecutor,
  FILL_INPUT: FillInputExecutor,
  CLICK_ELEMENT: ClickElementExecutor,
  WAIT_FOR_ELEMENT: WaitForElementExecutor,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookExecutor,
};
