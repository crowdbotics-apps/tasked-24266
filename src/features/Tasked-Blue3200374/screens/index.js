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
      <View style={styles.View_190_261} />
      <View style={styles.View_190_262}>
        <View style={styles.View_I190_262_1_89} />
      </View>
      <View style={styles.View_190_263}>
        <Text style={styles.Text_190_263}>tasked</Text>
      </View>
      <View style={styles.View_315_1244}>
        <View style={styles.View_190_264}>
          <View style={styles.View_I190_264_186_180}>
            <Text style={styles.Text_I190_264_186_180}>typography</Text>
          </View>
          <View style={styles.View_I190_264_186_222}>
            <View style={styles.View_I190_264_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_190_265}>
          <View style={styles.View_I190_265_188_182}>
            <Text style={styles.Text_I190_265_188_182}>get started</Text>
          </View>
          <View style={styles.View_I190_265_188_183}>
            <View style={styles.View_I190_265_188_183_188_582}>
              <View style={styles.View_I190_265_188_183_186_167} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/151e/4bde/b3e0334796d4b8612618839e6726c44f"
                }}
                style={styles.ImageBackground_I190_265_188_183_186_168}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_315_1243}>
          <View style={styles.View_190_266}>
            <View style={styles.View_I190_266_186_180}>
              <Text style={styles.Text_I190_266_186_180}>layout</Text>
            </View>
            <View style={styles.View_I190_266_186_222}>
              <View style={styles.View_I190_266_186_222_186_159} />
            </View>
          </View>
          <View style={styles.View_190_267}>
            <View style={styles.View_I190_267_188_217}>
              <Text style={styles.Text_I190_267_188_217}>box modal</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a0/ca63/0e07e4d5a24fddc4d532d0e9955f59ec"
              }}
              style={styles.ImageBackground_I190_267_188_219}
            />
          </View>
          <View style={styles.View_190_268}>
            <View style={styles.View_I190_268_188_227}>
              <Text style={styles.Text_I190_268_188_227}>
                grids and containers
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e66/2a56/2809bc1127b1886e384980b3897d7404"
              }}
              style={styles.ImageBackground_I190_268_188_224}
            />
          </View>
          <View style={styles.View_190_269}>
            <View style={styles.View_I190_269_188_227}>
              <Text style={styles.Text_I190_269_188_227}>implicit grid</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e66/2a56/2809bc1127b1886e384980b3897d7404"
              }}
              style={styles.ImageBackground_I190_269_188_224}
            />
          </View>
          <View style={styles.View_190_270}>
            <View style={styles.View_I190_270_188_217}>
              <Text style={styles.Text_I190_270_188_217}>negative spaces</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a0/ca63/0e07e4d5a24fddc4d532d0e9955f59ec"
              }}
              style={styles.ImageBackground_I190_270_188_219}
            />
          </View>
          <View style={styles.View_190_271}>
            <View style={styles.View_I190_271_188_227}>
              <Text style={styles.Text_I190_271_188_227}>alignment</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e66/2a56/2809bc1127b1886e384980b3897d7404"
              }}
              style={styles.ImageBackground_I190_271_188_224}
            />
          </View>
        </View>
        <View style={styles.View_190_272}>
          <View style={styles.View_I190_272_186_180}>
            <Text style={styles.Text_I190_272_186_180}>color</Text>
          </View>
          <View style={styles.View_I190_272_186_222}>
            <View style={styles.View_I190_272_186_222_186_159} />
          </View>
        </View>
        <View style={styles.View_190_273}>
          <View style={styles.View_I190_273_186_180}>
            <Text style={styles.Text_I190_273_186_180}>style</Text>
          </View>
          <View style={styles.View_I190_273_186_222}>
            <View style={styles.View_I190_273_186_222_186_159} />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab84/9fed/e0dbb58be469f952a2022c4410af5e7d"
        }}
        style={styles.ImageBackground_314_460}
      />
      <View style={styles.View_190_274}>
        <View style={styles.View_I190_274_46_450} />
        <View style={styles.View_I190_274_46_454}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I190_274_46_455}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I190_274_46_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I190_274_46_463}
          />
        </View>
        <View style={styles.View_I190_274_46_470}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
            }}
            style={styles.ImageBackground_I190_274_46_471}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_190_261: {
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
  View_190_262: {
    width: 134,
    height: 5,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I190_262_1_89: {
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
  View_190_263: {
    width: 109,
    minWidth: 109,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 84
  },
  Text_190_263: {
    color: "rgba(92, 157, 254, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_315_1244: {
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
  View_190_264: {
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
  View_I190_264_186_180: {
    flexGrow: 1,
    width: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_264_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_264_186_222: {
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
  View_I190_264_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(190, 216, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_190_265: {
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
  View_I190_265_188_182: {
    flexGrow: 1,
    width: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_265_188_182: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_265_188_183: {
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
  View_I190_265_188_183_188_582: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I190_265_188_183_186_167: {
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
  ImageBackground_I190_265_188_183_186_168: {
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
  View_315_1243: {
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
  View_190_266: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(232, 238, 255, 1)",
    overflow: "hidden"
  },
  View_I190_266_186_180: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_266_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_266_186_222: {
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
  View_I190_266_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(190, 216, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_190_267: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 56,
    backgroundColor: "rgba(232, 238, 255, 1)",
    overflow: "hidden"
  },
  View_I190_267_188_217: {
    flexGrow: 1,
    width: 95,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_267_188_217: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_267_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_268: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 112,
    backgroundColor: "rgba(232, 238, 255, 1)",
    overflow: "hidden"
  },
  View_I190_268_188_227: {
    flexGrow: 1,
    width: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_268_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_268_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_269: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 168,
    backgroundColor: "rgba(232, 238, 255, 1)",
    overflow: "hidden"
  },
  View_I190_269_188_227: {
    flexGrow: 1,
    width: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_269_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_269_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_270: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 224,
    backgroundColor: "rgba(232, 238, 255, 1)",
    overflow: "hidden"
  },
  View_I190_270_188_217: {
    flexGrow: 1,
    width: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_270_188_217: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_270_188_219: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_271: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 280,
    backgroundColor: "rgba(232, 238, 255, 1)",
    overflow: "hidden"
  },
  View_I190_271_188_227: {
    flexGrow: 1,
    width: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 17
  },
  Text_I190_271_188_227: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  ImageBackground_I190_271_188_224: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 16
  },
  View_190_272: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 392,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I190_272_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_272_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_272_186_222: {
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
  View_I190_272_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(190, 216, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_190_273: {
    width: 375,
    minWidth: 375,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 448,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I190_273_186_180: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 17
  },
  Text_I190_273_186_180: {
    color: "rgba(17, 17, 17, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.030600000321865085,
    textTransform: "none"
  },
  View_I190_273_186_222: {
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
  View_I190_273_186_222_186_159: {
    flexGrow: 1,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(190, 216, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_314_460: {
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
  View_190_274: {
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
  View_I190_274_46_450: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I190_274_46_454: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625,
    top: 8.0001220703125
  },
  ImageBackground_I190_274_46_455: {
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
  ImageBackground_I190_274_46_459: {
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
  ImageBackground_I190_274_46_463: {
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
  View_I190_274_46_470: {
    flexGrow: 1,
    width: 54,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.000030517578125,
    top: 12
  },
  ImageBackground_I190_274_46_471: {
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
