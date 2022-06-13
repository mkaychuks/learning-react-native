import { React } from "react";
import { StyleSheet, Pressable, Text, View} from "react-native";

const StyledButton = (props) => {
    const {type, content, onPress} = props

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'


  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor} ]}
        onPress={() => {
            onPress()
        }}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,   
    },
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
  });

  export default StyledButton
