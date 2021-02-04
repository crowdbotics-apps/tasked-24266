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
      <View style={styles.View_190_338} />
      <View style={styles.View_190_339}>
        <View style={styles.View_I190_339_1_89} />
      </View>
      <View style={styles.View_190_340}>
        <Text style={styles.Text_190_340}>tasked</Text>
      </View>
      <View style={styles.View_315_1234}>
        <View style={styles.View_190_341}>
          <View style={styles.View_I190_341_186_180}>
            <Text style={styles.Text_I190_341_186_180}>typography</Text>
          </View>
          <View style={styles.View_I190_341_186_222}>
            <View style={styles.View_I190_341_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_190_342}>
          <View style={styles.View_I190_342_188_182}>
            <Text style={styles.Text_I190_342_188_182}>get started</Text>
          </View>
          <View style={styles.View_I190_342_188_183}>
            <View style={styles.View_I190_342_188_183_188_582}>
              <View style={styles.View_I190_342_188_183_186_167} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/151e/4bde/b3e0334796d4b8612618839e6726c44f"
                }}
                style={styles.ImageBackground_I190_342_188_183_186_168}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_315_1233}>
          <View style={styles.View_190_343}>
            <View style={styles.View_I190_343_186_180}>
              <Text style={styles.Text_I190_343_186_180}>layout</Text>
            </View>
            <View style={styles.View_I190_343_186_222}>
              <View style={styles.View_I190_343_186_222_186_159} />
            </View>
          </View>
          <View style={styles.View_190_344}>
            <View style={styles.View_I190_344_188_217}>
              <Text style={styles.Text_I190_344_188_217}>box modal</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c9d/b27d/c67ce7eb680cd0b3d1f3d36f910a4ce1"
              }}
              style={styles.ImageBackground_I190_344_188_219}
            />
          </View>
          <View style={styles.View_190_345}>
            <View style={styles.View_I190_345_188_227}>
              <Text style={styles.Text_I190_345_188_227}>
                grids and containers
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f3/901d/3ba03321fecb59ef58a00d5534a6a6b5"
              }}
              style={styles.ImageBackground_I190_345_188_224}
            />
          </View>
          <View style={styles.View_190_346}>
            <View style={styles.View_I190_346_188_227}>
              <Text style={styles.Text_I190_346_188_227}>implicit grid</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f3/901d/3ba03321fecb59ef58a00d5534a6a6b5"
              }}
              style={styles.ImageBackground_I190_346_188_224}
            />
          </View>
          <View style={styles.View_190_347}>
            <View style={styles.View_I190_347_188_217}>
              <Text style={styles.Text_I190_347_188_217}>negative spaces</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c9d/b27d/c67ce7eb680cd0b3d1f3d36f910a4ce1"
              }}
              style={styles.ImageBackground_I190_347_188_219}
            />
          </View>
          <View style={styles.View_190_348}>
            <View style={styles.View_I190_348_188_227}>
              <Text style={styles.Text_I190_348_188_227}>alignment</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f3/901d/3ba03321fecb59ef58a00d5534a6a6b5"
              }}
              style={styles.ImageBackground_I190_348_188_224}
            />
          </View>
        </View>
        <View style={styles.View_190_349}>
          <View style={styles.View_I190_349_186_180}>
            <Text style={styles.Text_I190_349_186_180}>color</Text>
          </View>
          <View style={styles.View_I190_349_186_222}>
            <View style={styles.View_I190_349_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_190_350}>
          <View style={styles.View_I190_350_186_180}>
            <Text style={styles.Text_I190_350_186_180}>style</Text>
          </View>
          <View style={styles.View_I190_350_186_222}>
            <View style={styles.View_I190_350_186_222_186_159} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/849e/5b30/a8b05eb1c6c2d91039bcea1c207efe44"
        }}
        style={styles.ImageBackground_314_464}
      />
      <View style={styles.View_190_351}>
        <View style={styles.View_I190_351_46_971}>
          <View style={styles.View_I190_351_46_977}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I190_351_46_978}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I190_351_46_982}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I190_351_46_986}
            />
          </View>
          <View style={styles.View_I190_351_46_993}>
            <View style={styles.View_I190_351_46_994}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
                }}
                style={styles.ImageBackground_I190_351_46_995}
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
  View_190_338: {
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
  View_190_339: {
    width: 134,
    height: 5,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_339_1_89: {
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
  View_190_340: {
    width: 109,
    minWidth: 109,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 84
  },
  Text_190_340: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_315_1234: {
    width: 375,
    minWidth: 375,
    height: 560,
    minHeight: 560,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 141
  },
  View_190_341: {
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
  View_I190_341_186_180: {
    flexGrow: 1,
    width: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_341_186_180: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_341_186_222: {
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
  View_I190_341_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 215, 189, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_190_342: {
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
  View_I190_342_188_182: {
    flexGrow: 1,
    width: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_342_188_182: {
    color: "rgba(90, 77, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_342_188_183: {
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
  View_I190_342_188_183_188_582: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I190_342_188_183_186_167: {
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
    borderColor: "rgba(90, 77, 68, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_I190_342_188_183_186_168: {
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
  View_315_1233: {
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
  View_190_343: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(50, 43, 38, 1)",
    overflow: "hidden"
  },
  View_I190_343_186_180: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_343_186_180: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_343_186_222: {
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
  View_I190_343_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 215, 189, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_190_344: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 56,
    backgroundColor: "rgba(50, 43, 38, 1)",
    overflow: "hidden"
  },
  View_I190_344_188_217: {
    flexGrow: 1,
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_344_188_217: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_344_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_345: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 112,
    backgroundColor: "rgba(50, 43, 38, 1)",
    overflow: "hidden"
  },
  View_I190_345_188_227: {
    flexGrow: 1,
    width: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_345_188_227: {
    color: "rgba(90, 77, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_345_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_346: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 168,
    backgroundColor: "rgba(50, 43, 38, 1)",
    overflow: "hidden"
  },
  View_I190_346_188_227: {
    flexGrow: 1,
    width: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_346_188_227: {
    color: "rgba(90, 77, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_346_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_347: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 224,
    backgroundColor: "rgba(50, 43, 38, 1)",
    overflow: "hidden"
  },
  View_I190_347_188_217: {
    flexGrow: 1,
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_347_188_217: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_347_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_348: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 280,
    backgroundColor: "rgba(50, 43, 38, 1)",
    overflow: "hidden"
  },
  View_I190_348_188_227: {
    flexGrow: 1,
    width: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_348_188_227: {
    color: "rgba(90, 77, 68, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_348_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_349: {
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
  View_I190_349_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_349_186_180: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_349_186_222: {
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
  View_I190_349_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 215, 189, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_190_350: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 448,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I190_350_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_350_186_180: {
    color: "rgba(250, 215, 189, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_350_186_222: {
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
  View_I190_350_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 215, 189, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_314_464: {
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
  View_190_351: {
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
  View_I190_351_46_971: {
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
  View_I190_351_46_977: {
    width: 66.661376953125,
    minWidth: 66.661376953125,
    height: 20.666584014892578,
    minHeight: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 8.0001220703125
  },
  ImageBackground_I190_351_46_978: {
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
  ImageBackground_I190_351_46_982: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965570449829102,
    minHeight: 10.965570449829102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027099609375,
    top: 9.33056640625
  },
  ImageBackground_I190_351_46_986: {
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
  View_I190_351_46_993: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12
  },
  View_I190_351_46_994: {
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
  ImageBackground_I190_351_46_995: {
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
