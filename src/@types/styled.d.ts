import 'styled-components/native';
import { AllThemes } from '~/styles/themes/types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends AllThemes {}
}
