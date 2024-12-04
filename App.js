/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import { View } from 'react-native';
// // import type {PropsWithChildren} from 'react';
// import { ButtonFactory } from './components/ButtonFactory';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// const App = () => {
//   return (
//     <View>
//       {ButtonFactory('primary', { text: 'Primary', onPress: () => alert('Primary Button Pressed') })}
//       {ButtonFactory('secondary', { text: 'Secondary', onPress: () => alert('Secondary Button Pressed') })}
//       {ButtonFactory('danger', { text: 'Danger', onPress: () => alert('Danger Button Pressed') })}
//     </View>
//   )
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
// import React, { createContext, useState } from "react";
// import { MyComponent } from "./components/Context/MyComponent";

// export const MyContext = createContext();

// const App = () => {
//     const [value, setValue] = useState('Hello World!');

//     return (
//         <MyContext.Provider value={ { value, setValue }}>
//             <MyComponent />
//         </MyContext.Provider>
//     )
// }

import { Dimensions, View, Text } from "react-native";
import { useEffect, useState } from "react";

const App = () => {
  const [orientation, setOrientation] = useState("PORTRAIT");

  useEffect(() => {

    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'LANDSCAPE': 'PORTRAIT');
    }

    Dimensions.addEventListener('change', updateOrientation);
    updateOrientation();
  
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };

  }, []);

  return(
    <View>
      <Text>Current Orientation: {orientation}</Text>
    </View>
  )
}

export default App;
