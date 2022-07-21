import 'styled-components';
import { AllThemes } from '~/styles/themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends AllThemes {}
}
