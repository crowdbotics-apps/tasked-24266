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
      <View style={styles.View_188_608} />
      <View style={styles.View_188_609}>
        <View style={styles.View_I188_609_1_89} />
      </View>
      <View style={styles.View_188_610}>
        <Text style={styles.Text_188_610}>tasked</Text>
      </View>
      <View style={styles.View_315_1236}>
        <View style={styles.View_188_611}>
          <View style={styles.View_I188_611_186_180}>
            <Text style={styles.Text_I188_611_186_180}>typography</Text>
          </View>
          <View style={styles.View_I188_611_186_222}>
            <View style={styles.View_I188_611_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_188_612}>
          <View style={styles.View_I188_612_188_182}>
            <Text style={styles.Text_I188_612_188_182}>get started</Text>
          </View>
          <View style={styles.View_I188_612_188_183}>
            <View style={styles.View_I188_612_188_183_188_582}>
              <View style={styles.View_I188_612_188_183_186_167} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/151e/4bde/b3e0334796d4b8612618839e6726c44f"
                }}
                style={styles.ImageBackground_I188_612_188_183_186_168}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_315_1235}>
          <View style={styles.View_188_613}>
            <View style={styles.View_I188_613_186_180}>
              <Text style={styles.Text_I188_613_186_180}>layout</Text>
            </View>
            <View style={styles.View_I188_613_186_222}>
              <View style={styles.View_I188_613_186_222_186_159} />
            </View>
          </View>
          <View style={styles.View_188_614}>
            <View style={styles.View_I188_614_188_217}>
              <Text style={styles.Text_I188_614_188_217}>box modal</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2cf/b547/21d90419543808b96e338d0364a7240c"
              }}
              style={styles.ImageBackground_I188_614_188_219}
            />
          </View>
          <View style={styles.View_188_615}>
            <View style={styles.View_I188_615_188_227}>
              <Text style={styles.Text_I188_615_188_227}>
                grids and containers
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fce/e68f/0073ce10eca210bb0cc1af88d30c067a"
              }}
              style={styles.ImageBackground_I188_615_188_224}
            />
          </View>
          <View style={styles.View_188_616}>
            <View style={styles.View_I188_616_188_227}>
              <Text style={styles.Text_I188_616_188_227}>implicit grid</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fce/e68f/0073ce10eca210bb0cc1af88d30c067a"
              }}
              style={styles.ImageBackground_I188_616_188_224}
            />
          </View>
          <View style={styles.View_188_617}>
            <View style={styles.View_I188_617_188_217}>
              <Text style={styles.Text_I188_617_188_217}>negative spaces</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2cf/b547/21d90419543808b96e338d0364a7240c"
              }}
              style={styles.ImageBackground_I188_617_188_219}
            />
          </View>
          <View style={styles.View_188_618}>
            <View style={styles.View_I188_618_188_227}>
              <Text style={styles.Text_I188_618_188_227}>alignment</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fce/e68f/0073ce10eca210bb0cc1af88d30c067a"
              }}
              style={styles.ImageBackground_I188_618_188_224}
            />
          </View>
        </View>
        <View style={styles.View_188_619}>
          <View style={styles.View_I188_619_186_180}>
            <Text style={styles.Text_I188_619_186_180}>color</Text>
          </View>
          <View style={styles.View_I188_619_186_222}>
            <View style={styles.View_I188_619_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_188_620}>
          <View style={styles.View_I188_620_186_180}>
            <Text style={styles.Text_I188_620_186_180}>style</Text>
          </View>
          <View style={styles.View_I188_620_186_222}>
            <View style={styles.View_I188_620_186_222_186_159} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea40/5761/582e3576b673a515566a12a9bd04b6ea"
        }}
        style={styles.ImageBackground_314_462}
      />
      <View style={styles.View_188_621}>
        <View style={styles.View_I188_621_46_450} />
        <View style={styles.View_I188_621_46_454}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I188_621_46_455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I188_621_46_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I188_621_46_463}
          />
        </View>
        <View style={styles.View_I188_621_46_470}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
            }}
            style={styles.ImageBackground_I188_621_46_471}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_188_608: {
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
  View_188_609: {
    width: 134,
    height: 5,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I188_609_1_89: {
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
  View_188_610: {
    width: 109,
    minWidth: 109,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 84
  },
  Text_188_610: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_315_1236: {
    width: 375.0000305175781,
    minWidth: 375.0000305175781,
    height: 560,
    minHeight: 560,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 141
  },
  View_188_611: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_611_186_180: {
    flexGrow: 1,
    width: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_611_186_180: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_611_186_222: {
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
  View_I188_611_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(156, 165, 157, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_612: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 504,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_612_188_182: {
    flexGrow: 1,
    width: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_612_188_182: {
    color: "rgba(156, 165, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_612_188_183: {
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
  View_I188_612_188_183_188_582: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I188_612_188_183_186_167: {
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
  ImageBackground_I188_612_188_183_186_168: {
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
  View_315_1235: {
    width: 375,
    minWidth: 375,
    height: 336,
    minHeight: 336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 56
  },
  View_188_613: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(219, 221, 215, 1)",
    overflow: "hidden"
  },
  View_I188_613_186_180: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_613_186_180: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_613_186_222: {
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
  View_I188_613_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(156, 165, 157, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_614: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 56,
    backgroundColor: "rgba(219, 221, 215, 1)",
    overflow: "hidden"
  },
  View_I188_614_188_217: {
    flexGrow: 1,
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_614_188_217: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_614_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_615: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 112,
    backgroundColor: "rgba(219, 221, 215, 1)",
    overflow: "hidden"
  },
  View_I188_615_188_227: {
    flexGrow: 1,
    width: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_615_188_227: {
    color: "rgba(156, 165, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_615_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_616: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 168,
    backgroundColor: "rgba(219, 221, 215, 1)",
    overflow: "hidden"
  },
  View_I188_616_188_227: {
    flexGrow: 1,
    width: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_616_188_227: {
    color: "rgba(156, 165, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_616_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_617: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 224,
    backgroundColor: "rgba(219, 221, 215, 1)",
    overflow: "hidden"
  },
  View_I188_617_188_217: {
    flexGrow: 1,
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_617_188_217: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_617_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_618: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 280,
    backgroundColor: "rgba(219, 221, 215, 1)",
    overflow: "hidden"
  },
  View_I188_618_188_227: {
    flexGrow: 1,
    width: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I188_618_188_227: {
    color: "rgba(156, 165, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I188_618_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_188_619: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 392,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_619_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_619_186_180: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_619_186_222: {
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
  View_I188_619_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(156, 165, 157, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_188_620: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00006103515625,
    top: 448,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I188_620_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I188_620_186_180: {
    color: "rgba(78, 88, 81, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I188_620_186_222: {
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
  View_I188_620_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(156, 165, 157, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_314_462: {
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
  View_188_621: {
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
  View_I188_621_46_450: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I188_621_46_454: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 8.0001220703125
  },
  ImageBackground_I188_621_46_455: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.3333740234375,
    top: 9.333251953125
  },
  ImageBackground_I188_621_46_459: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027099609375,
    top: 9.33056640625
  },
  ImageBackground_I188_621_46_463: {
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
  View_I188_621_46_470: {
    flexGrow: 1,
    width: 54,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12
  },
  ImageBackground_I188_621_46_471: {
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
