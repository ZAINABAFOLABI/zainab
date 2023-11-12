import { State } from '@ngxs/store';
import { DictionaryState } from './states/dictionary/dictionary.state';
import { ContactState } from './states/contact/contact.state';

export const DashboardStates = [DictionaryState, ContactState];

@State({
  name: 'dashboardStateModule',
  children: DashboardStates
})
export class DashboardStateModule {}
