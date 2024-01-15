import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import Icon from "./Icon";
import theme from "./theme";

type ButtonTitleActionProps = {
  title: string;
  action: () => void;
};

const ButtonTitleAction: React.FC<ButtonTitleActionProps> = ({
  title,
  action,
}) => {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity onPress={action}>
        <View style={styles.buttonlogout}>
          <View style={styles.iconleft}>
            {/* <Icon iconName="logout" color={theme.colors.gray100} size="Medium"></Icon> */}
          </View>
          <View style={styles.textwrapper}>
            <Text style={styles.text}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
};

export default ButtonTitleAction;


const styles = StyleSheet.create({
  buttonlogout: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(225, 229, 235, 1)",
    borderRadius: 12
  },
  iconleft: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0
  },
  boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    right: 3,
    bottom: 3,
    left: 2,
    overflow: "visible"
  },
  textwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4
  },
  text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20
  }
})