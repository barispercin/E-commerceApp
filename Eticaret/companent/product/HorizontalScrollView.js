import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HorizontalScrollView = () => {
    return (
        <View style={{ width: 400 }} >
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
                                width: 190,
                                height: 280,
                            }} source={{ uri: "https://e.dijitalka.com/data/upload/urun/61a7a1b9d34cd-45562-1.jpg" }}>
                            </Image>
                            <TouchableOpacity>
                                <View style={{
                                    position: "absolute", right: 5, top: 7,
                                    alignItems: "center", justifyContent: "center", backgroundColor: "#F4F4F4", width: 44, height: 44, borderRadius: 22
                                }}>
                                    <Icon style={{ color: "#FD8127" }} name="heart" size={31} ></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 90, width: 190, alignItems: "center", justifyContent: "center", flexDirection: "column", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: "#DEDEDE" }}>
                            <Text style={{ padding: 5, color: "#000000", fontSize: 20, fontFamily: "SourceSansPro-Regular", fontWeight: "700" }}>Pantolon</Text>
                            <Text>Deneme</Text>
                            <Text style={{ color: "#7A420F", fontSize: 22, fontFamily: "SourceSansPro-Regular", }}>300.00 ₺</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "column", paddingLeft: 10
                    }}>
                        <View style={{ flexDirection: "row", }} >
                            <Image style={{
                                paddingTop: -30,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                width: 190,
                                height: 280,
                            }} source={{ uri: "https://e.dijitalka.com/data/upload/urun/61a7a1b9d34cd-45562-1.jpg" }}>
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
                            <Text style={{ padding: 5, color: "#333333", fontSize: 20, fontFamily: "SourceSansPro-Regular", fontWeight: "700" }}>Pantolon</Text>
                            <Text>Deneme</Text>
                            <Text style={{ color: "#7A420F", fontSize: 22, fontFamily: "SourceSansPro-Regular", }}>300.00 ₺
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "column", paddingLeft: 10
                    }}>
                        <View style={{ flexDirection: "row", }} >
                            <Image style={{
                                paddingTop: -30,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                width: 190,
                                height: 280,
                            }} source={{ uri: "https://e.dijitalka.com/data/upload/urun/61a7a1b9d34cd-45562-1.jpg" }}>
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
                            <Text style={{ padding: 5, color: "#333333", fontSize: 20, fontFamily: "SourceSansPro-Regular", fontWeight: "700" }}>Pantolon</Text>
                            <Text>Deneme</Text>
                            <Text style={{ color: "#7A420F", fontSize: 22, fontFamily: "SourceSansPro-Regular", }}>300.00 ₺
                            </Text>
                        </View>
                    </View>
                </Text>
            </ScrollView>

        </View>
    )
}

export default HorizontalScrollView;