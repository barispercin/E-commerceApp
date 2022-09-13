import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoverContainer = () => {
    return (
        <View style={{ height: 300, width: 400 }} >
            <ScrollView showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <Text>
                    <View style={{
                        position: 'absolute', top: 10,
                        flexDirection: "column", paddingLeft: 5,
                    }}>
                        <View style={{ flexDirection: "row", elevation: 5, }} >
                            <Image style={{

                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                width: 200,
                                height: 200,
                            }} source={('./assets/hadise.jpg')}>
                            </Image>
                            <TouchableOpacity>
                                <View style={{
                                    position: "absolute", right: 10, top: 7,
                                    alignItems: "center", justifyContent: "center", backgroundColor: "#F4F4F4", width: 44, height: 44, borderRadius: 22
                                }}>
                                    <Icon style={{ color: "#FD8127" }} name="heart" size={31} ></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 90, alignItems: "center", justifyContent: "center", flexDirection: "column", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: "#DEDEDE" }}>
                            <Text style={{ padding: 5, color: "#000000", fontSize: 20, fontFamily: "SourceSansPro-Regular", fontWeight: "700" }}>Kazak</Text>
                            <Text>Deneme</Text>
                            <Text style={{ color: "#7A420F", fontSize: 22, fontFamily: "SourceSansPro-Regular", }}>40.00 ₺</Text>
                        </View>
                    </View>

                    <View style={{
                        
                        flexDirection: "column", paddingLeft: 10
                    }}>

                        <View style={{ flexDirection: "row", }} >
                            <Image style={{
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                width: 200,
                                height: 200,
                            }} source={('./assets/hadise.jpg')}>
                            </Image>

                            <TouchableOpacity>
                                <View style={{
                                    position: "absolute", right: 10, top: 7,
                                    alignItems: "center", justifyContent: "center", backgroundColor: "#F4F4F4", width: 44, height: 44, borderRadius: 22
                                }}>
                                    <Icon style={{ color: "#FD8127" }} name="heart" size={31} ></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 90, alignItems: "center", justifyContent: "center", flexDirection: "column", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: "#DEDEDE" }}>

                            <Text style={{ padding: 5, color: "#333333", fontSize: 20, fontFamily: "SourceSansPro-Regular", fontWeight: "700" }}>Kazak</Text>
                            <Text>Deneme</Text>
                            <Text style={{ color: "#7A420F", fontSize: 22, fontFamily: "SourceSansPro-Regular", }}>40.00 ₺


                            </Text>
                        </View>

                    </View>
                </Text>
            </ScrollView>

        </View>
    )
}

export default DiscoverContainer;