import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import { IconLibrary, IconName } from '../types/Icons';
import { Text } from 'react-native';
interface CustomIconProps {
  iconName: IconName;
  iconLibraryName: IconLibrary;
  color?: string;
  size?: number;
}

const DynamicComponent = ({
  iconName,
  iconLibraryName,
  color,
  size,
}: CustomIconProps) => {
  let Component;

  switch (iconLibraryName) {
    case 'AntDesign':
      Component = AntDesign;
      break;
    case 'EvilIcons':
      Component = EvilIcons;
      break;
    case 'Entypo':
      Component = Entypo;
      break;
    case 'Feather':
      Component: Feather;
      break;
    case 'Fontisto':
      Component: Fontisto;
      break;
    case 'FontAwesome':
      Component: FontAwesome;
      break;
    case 'Foundation':
      Component: Foundation;
      break;
    case 'Ionicons':
      Component: Ionicons;
      break;
    case 'MaterialCommunityIcons':
      Component: MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      Component: MaterialIcons;
      break;
    case 'Octicons':
      Component: Octicons;
      break;
    case 'SimpleLineIcons':
      Component: SimpleLineIcons;
      break;
    case 'Zocial':
      Component: Zocial;
      break;
    default:
      // Set a default component or handle the error case
      Component = () => <Text>404</Text>;
      break;
  }

  // @ts-ignore
  return <Component name={iconName} color={color} size={size} />;
};

export function CustomIcon(props: CustomIconProps) {
  return <DynamicComponent {...props} />;
}
