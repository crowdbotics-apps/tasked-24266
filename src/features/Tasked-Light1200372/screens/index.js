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
      <View style={styles.View_188_470} />
      <View style={styles.View_188_471}>
        <View style={styles.View_I188_471_1_89} />
      </View>
      <View style={styles.View_188_472}>
        <Text style={styles.Text_188_472}>tasked</Text>
      </View>
      <View style={styles.View_188_473}>
        <View style={styles.View_I188_473_186_180}>
          <Text style={styles.Text_I188_473_186_180}>typography</Text>
        </View>
        <View style={styles.View_I188_473_186_222}>
          <View style={styles.View_I188_473_186_222_186_159} />
        </View>
      </View>
      <View style={styles.View_188_474}>
        <View style={styles.View_I188_474_188_182}>
          <Text style={styles.Text_I188_474_188_182}>get started</Text>
        </View>
        <View style={styles.View_I188_474_188_183}>
          <View style={styles.View_I188_474_188_183_188_582}>
            <View style={styles.View_I188_474_188_183_186_167} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/151e/4bde/b3e0334796d4b8612618839e6726c44f"
              }}
              style={styles.ImageBackground_I188_474_188_183_186_168}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_315_1142}>
        <View style={styles.View_188_475}>
          <View style={styles.View_I188_475_186_180}>
            <Text style={styles.Text_I188_475_186_180}>layout</Text>
          </View>
          <View style={styles.View_I188_475_186_222}>
            <View style={styles.View_I188_475_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_188_476}>
          <View style={styles.View_I188_476_188_217}>
            <Text style={styles.Text_I188_476_188_217}>box modal</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cea/849b/5f03600b58df54e944816a8cc8d7db79"
            }}
            style={styles.ImageBackground_I188_476_188_219}
          />
        </View>
        <View style={styles.View_188_477}>
          <View style={styles.View_I188_477_188_227}>
            <Text style={styles.Text_I188_477_188_227}>
              grids and containers
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e2/b143/9d28095fa55ce92c826312fa80b72cd0"
            }}
            style={styles.ImageBackground_I188_477_188_224}
          />
        </View>
        <View style={styles.View_188_478}>
          <View style={styles.View_I188_478_188_227}>
            <Text style={styles.Text_I188_478_188_227}>implicit grid</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e2/b143/9d28095fa55ce92c826312fa80b72cd0"
            }}
            style={styles.ImageBackground_I188_478_188_224}
          />
        </View>
        <View style={styles.View_188_479}>
          <View style={styles.View_I188_479_188_217}>
            <Text style={styles.Text_I188_479_188_217}>negative spaces</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cea/849b/5f03600b58df54e944816a8cc8d7db79"
            }}
            style={styles.ImageBackground_I188_479_188_219}
          />
        </View>
        <View style={styles.View_188_480}>
          <View style={styles.View_I188_480_188_227}>
            <Text style={styles.Text_I188_480_188_227}>alignment</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0e2/b143/9d28095fa55ce92c826312fa80b72cd0"
            }}
            style={styles.ImageBackground_I188_480_188_224}
          />
        </View>
      </View>
      <View style={styles.View_188_481}>
        <View style={styles.View_I188_481_186_180}>
          <Text style={styles.Text_I188_481_186_180}>color</Text>
        </View>
        <View style={styles.View_I188_481_186_222}>
          <View style={styles.View_I188_481_186_222_186_159} />
        </View>
      </View>
      <View style={styles.View_188_482}>
        <View style={styles.View_I188_482_186_180}>
          <Text style={styles.Text_I188_482_186_180}>style</Text>
        </View>
        <View style={styles.View_I188_482_186_222}>
          <View style={styles.View_I188_482_186_222_186_159} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/268e/5b04/53d88c6c7bd1ec831322a9d69da7499f"
        }}
        style={styles.ImageBackground_314_456}
      />
      <View style={styles.View_188_483}>
        <View style={styles.View_I188_483_46_450} />
        <View style={styles.View_I188_483_46_454}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I188_483_46_455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I188_483_46_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I188_483_46_463}
          />
        </View>
        <View style={styles.View_I188_483_46_470}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
            }}
            style={styles.ImageBackground_I188_483_46_471}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_188_470: {
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
  View_188_471: {
    width: 134,
    height: 5,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I188_471_1_89: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(17, 17, 17, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_188_472: {
    width: 109,
    minWidth: 109,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 84
  },
  Text_188_472: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_188_473: {
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
  View_I188_473_186_180: {
    flexGrow: 1,
    width: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_473_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_473_186_222: {
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
  View_I188_473_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(17, 17, 17, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_474: {
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
  View_I188_474_188_182: {
    flexGrow: 1,
    width: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_474_188_182: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_474_188_183: {
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
  View_I188_474_188_183_188_582: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I188_474_188_183_186_167: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(92, 157, 254, 1)",
    borderColor: "rgba(17, 17, 17, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_I188_474_188_183_186_168: {
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
  View_315_1142: {
    width: 375,
    minWidth: 375,
    height: 336,
    minHeight: 336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 197
  },
  View_188_475: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 238, 238, 1)",
    overflow: "hidden"
  },
  View_I188_475_186_180: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_475_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_475_186_222: {
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
  View_I188_475_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(17, 17, 17, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_476: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 56,
    backgroundColor: "rgba(238, 238, 238, 1)",
    overflow: "hidden"
  },
  View_I188_476_188_217: {
    flexGrow: 1,
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_476_188_217: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_476_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_477: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 112,
    backgroundColor: "rgba(238, 238, 238, 1)",
    overflow: "hidden"
  },
  View_I188_477_188_227: {
    flexGrow: 1,
    width: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_477_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_477_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_478: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 168,
    backgroundColor: "rgba(238, 238, 238, 1)",
    overflow: "hidden"
  },
  View_I188_478_188_227: {
    flexGrow: 1,
    width: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_478_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_478_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_479: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 224,
    backgroundColor: "rgba(238, 238, 238, 1)",
    overflow: "hidden"
  },
  View_I188_479_188_217: {
    flexGrow: 1,
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_479_188_217: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_479_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_480: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 280,
    backgroundColor: "rgba(238, 238, 238, 1)",
    overflow: "hidden"
  },
  View_I188_480_188_227: {
    flexGrow: 1,
    width: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_480_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_480_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_481: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 533,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_481_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_481_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_481_186_222: {
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
  View_I188_481_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(17, 17, 17, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_482: {
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
  View_I188_482_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_482_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_482_186_222: {
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
  View_I188_482_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(17, 17, 17, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_314_456: {
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
  View_188_483: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_483_46_450: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I188_483_46_454: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666564941406,
    top: 8.0001220703125
  },
  ImageBackground_I188_483_46_455: {
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
  ImageBackground_I188_483_46_459: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027069091796875,
    top: 9.33056640625
  },
  ImageBackground_I188_483_46_463: {
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
  View_I188_483_46_470: {
    flexGrow: 1,
    width: 54,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.000022888183594,
    top: 12
  },
  ImageBackground_I188_483_46_471: {
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
