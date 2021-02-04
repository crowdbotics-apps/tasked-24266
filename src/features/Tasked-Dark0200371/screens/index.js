import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_188_353} />
      <View style={styles.View_188_369}>
        <View style={styles.View_I188_369_1_89} />
      </View>
      <View style={styles.View_188_393}>
        <Text style={styles.Text_188_393}>tasked</Text>
      </View>
      <View style={styles.View_188_394}>
        <View style={styles.View_I188_394_186_180}>
          <Text style={styles.Text_I188_394_186_180}>typography</Text>
        </View>
        <View style={styles.View_I188_394_186_222}>
          <View style={styles.View_I188_394_186_222_186_159} />
        </View>
      </View>
      <View style={styles.View_188_446}>
        <View style={styles.View_I188_446_188_182}>
          <Text style={styles.Text_I188_446_188_182}>get started</Text>
        </View>
        <View style={styles.View_I188_446_188_183}>
          <View style={styles.View_I188_446_188_183_188_582}>
            <View style={styles.View_I188_446_188_183_186_167} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff59/fa8a/41c7e4af340495952b8b11b8aa32a6a1"
              }}
              style={styles.ImageBackground_I188_446_188_183_186_168}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_188_398}>
        <View style={styles.View_I188_398_186_180}>
          <Text style={styles.Text_I188_398_186_180}>layout</Text>
        </View>
        <View style={styles.View_I188_398_186_222}>
          <View style={styles.View_I188_398_186_222_186_159} />
        </View>
      </View>
      <View style={styles.View_188_402}>
        <View style={styles.View_I188_402_188_217}>
          <Text style={styles.Text_I188_402_188_217}>box modal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d6/2dd0/9b25020fc25aba9755af08cd70dfe6de"
          }}
          style={styles.ImageBackground_I188_402_188_219}
        />
      </View>
      <View style={styles.View_188_406}>
        <View style={styles.View_I188_406_188_227}>
          <Text style={styles.Text_I188_406_188_227}>grids and containers</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e2/b143/9d28095fa55ce92c826312fa80b72cd0"
          }}
          style={styles.ImageBackground_I188_406_188_224}
        />
      </View>
      <View style={styles.View_188_410}>
        <View style={styles.View_I188_410_188_227}>
          <Text style={styles.Text_I188_410_188_227}>implicit grid</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e2/b143/9d28095fa55ce92c826312fa80b72cd0"
          }}
          style={styles.ImageBackground_I188_410_188_224}
        />
      </View>
      <View style={styles.View_188_414}>
        <View style={styles.View_I188_414_188_217}>
          <Text style={styles.Text_I188_414_188_217}>negative spaces</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d6/2dd0/9b25020fc25aba9755af08cd70dfe6de"
          }}
          style={styles.ImageBackground_I188_414_188_219}
        />
      </View>
      <View style={styles.View_188_418}>
        <View style={styles.View_I188_418_188_227}>
          <Text style={styles.Text_I188_418_188_227}>alignment</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e2/b143/9d28095fa55ce92c826312fa80b72cd0"
          }}
          style={styles.ImageBackground_I188_418_188_224}
        />
      </View>
      <View style={styles.View_188_422}>
        <View style={styles.View_I188_422_186_180}>
          <Text style={styles.Text_I188_422_186_180}>color</Text>
        </View>
        <View style={styles.View_I188_422_186_222}>
          <View style={styles.View_I188_422_186_222_186_159} />
        </View>
      </View>
      <View style={styles.View_188_427}>
        <View style={styles.View_I188_427_186_180}>
          <Text style={styles.Text_I188_427_186_180}>style</Text>
        </View>
        <View style={styles.View_I188_427_186_222}>
          <View style={styles.View_I188_427_186_222_186_159} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/268e/5b04/53d88c6c7bd1ec831322a9d69da7499f"
        }}
        style={styles.ImageBackground_314_458}
      />
      <View style={styles.View_188_370}>
        <View style={styles.View_I188_370_46_971}>
          <View style={styles.View_I188_370_46_977}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c70/4dcb/21a60dd38b506d9e373ecb5209a126a6"
              }}
              style={styles.ImageBackground_I188_370_46_978}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I188_370_46_982}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I188_370_46_986}
            />
          </View>
          <View style={styles.View_I188_370_46_993}>
            <View style={styles.View_I188_370_46_994}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                }}
                style={styles.ImageBackground_I188_370_46_995}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_188_353: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_188_369: {
    width: 134,
    height: 5,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I188_369_1_89: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_188_393: {
    width: 109,
    minWidth: 109,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 84
  },
  Text_188_393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_188_394: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 197,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_394_186_180: {
    flexGrow: 1,
    width: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_394_186_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_394_186_222: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_394_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 85, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_446: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 141,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_446_188_182: {
    flexGrow: 1,
    width: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_446_188_182: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_446_188_183: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_446_188_183_188_582: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I188_446_188_183_186_167: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 90, 96, 1)",
    borderColor: "rgba(17, 17, 17, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_I188_446_188_183_186_168: {
    width: 11.5,
    minWidth: 11.5,
    height: 7.666666507720947,
    minHeight: 7.666666507720947,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 8
  },
  View_188_398: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 253,
    backgroundColor: "rgba(34, 34, 34, 1)",
    overflow: "hidden"
  },
  View_I188_398_186_180: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_398_186_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_398_186_222: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_398_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 85, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_402: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 309,
    backgroundColor: "rgba(34, 34, 34, 1)",
    overflow: "hidden"
  },
  View_I188_402_188_217: {
    flexGrow: 1,
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_402_188_217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_402_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_406: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 365,
    backgroundColor: "rgba(34, 34, 34, 1)",
    overflow: "hidden"
  },
  View_I188_406_188_227: {
    flexGrow: 1,
    width: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_406_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_406_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_410: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 421,
    backgroundColor: "rgba(34, 34, 34, 1)",
    overflow: "hidden"
  },
  View_I188_410_188_227: {
    flexGrow: 1,
    width: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_410_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_410_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_414: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 477,
    backgroundColor: "rgba(34, 34, 34, 1)",
    overflow: "hidden"
  },
  View_I188_414_188_217: {
    flexGrow: 1,
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_414_188_217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_414_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_418: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 533,
    backgroundColor: "rgba(34, 34, 34, 1)",
    overflow: "hidden"
  },
  View_I188_418_188_227: {
    flexGrow: 1,
    width: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_418_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_418_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_422: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 589,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_422_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_422_186_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_422_186_222: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_422_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 85, 1)",
    borderColor: "rgba(85, 85, 85, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_427: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 645,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_427_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_427_186_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_427_186_222: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_427_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 85, 1)",
    borderColor: "rgba(85, 85, 85, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_314_458: {
    width: 48,
    minWidth: 48,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 718
  },
  View_188_370: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I188_370_46_971: {
    flexGrow: 1,
    width: 375,
    height: 48.400001525878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_370_46_977: {
    width: 66.661376953125,
    minWidth: 66.661376953125,
    height: 20.666584014892578,
    minHeight: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666564941406,
    top: 8.0001220703125
  },
  ImageBackground_I188_370_46_978: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.333343505859375,
    top: 9.333251953125
  },
  ImageBackground_I188_370_46_982: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965570449829102,
    minHeight: 10.965570449829102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027069091796875,
    top: 9.33056640625
  },
  ImageBackground_I188_370_46_986: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9.66650390625
  },
  View_I188_370_46_993: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.000022888183594,
    top: 12
  },
  View_I188_370_46_994: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I188_370_46_995: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
