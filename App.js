import {StatusBar, StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
  	<>
    <WebView source={{uri:"https://srinivasan000.github.io"}} style={{ flex:1,paddingTop:30 }} />
      <StatusBar barStyle="light-content" backgroundColor="#1f242d"/>
    </>
  );
}
