import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HorizontalScrollView from '../../companent/product/HorizontalScrollView';
const sourc = "https://e.dijitalka.com/data/upload/urun/61a7a1b9d34cd-45562-1.jpg";
const Magaza = () => {
    return (

        <View style={{ backgroundColor: "white" }} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: 3000 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={{
                            flexDirection: "row", paddingTop: 20, alignItems: "center"
                        }}>
                            <View style={{
                                flexDirection: "column", paddingLeft: 10,
                            }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}>
                                    </View>
                                    <Text style={{ paddingLeft: 10, color: "#5E5E5E", fontFamily: "'Prata-Regular'", fontSize: 16 }}>Hepsi</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", paddingLeft: 20, }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}></View>
                                    <Text style={{ paddingLeft: 10, color: "#5E5E5E", fontFamily: 'Prata-Regular', fontSize: 16 }}>Erkek</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", paddingLeft: 20, }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}></View>
                                    <Text style={{ paddingLeft: 10, color: "#7A420F", fontFamily: 'Prata-Regular', fontSize: 16 }}>Kadın</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", paddingLeft: 20, }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}></View>
                                    <Text style={{ paddingLeft: 10, color: "#5E5E5E", fontFamily: 'Prata-Regular', fontSize: 16 }}>Çocuk</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", paddingLeft: 20, }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}></View>
                                    <Text style={{ paddingLeft: 10, color: "#5E5E5E", fontFamily: 'Prata-Regular', fontSize: 16 }}>Çocuk</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", paddingLeft: 20, }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}></View>
                                    <Text style={{ paddingLeft: 10, color: "#5E5E5E", fontFamily: 'Prata-Regular', fontSize: 16 }}>Çocuk</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", paddingLeft: 20, }}>
                                <TouchableOpacity>
                                    <View style={{ width: 72, height: 72, backgroundColor: "#F1F4F9", borderRadius: 36, }}></View>
                                    <Text style={{ paddingLeft: 10, color: "#5E5E5E", fontFamily: 'Prata-Regular', fontSize: 16 }}>Çocuk</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flexDirection: "row", paddingTop: 30, paddingLeft: 7 }}>
                    <View style={{

                        flexDirection: "column", paddingLeft: 5,
                    }}>
                        <View style={{ flexDirection: "row", elevation: 5 }} >
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
                </View>
                <View style={{ flexDirection: "row", paddingTop: 30, paddingLeft: 7 }}>
                    <View style={{

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
                        flexDirection: "column", paddingLeft: 5,
                    }}>
                        <View style={{ flexDirection: "row", elevation: 5, }} >
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
                </View>
                <View style={{ flexDirection: "row", paddingTop: 30, paddingLeft: 7 }}>
                    <View style={{
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
                </View>

                <View style={{ flexDirection: "row", paddingTop: 30, paddingLeft: 7 }}>
                    <View style={{
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
                            <Text style={{ padding: 5, color: "#000000", fontSize: 20, fontFamily: "SourceSansPro-Regular", fontWeight: "700" }}>Pantolon
                            </Text>
                            <Text>Deneme</Text>
                            <Text style={{ color: "#7A420F", fontSize: 22, fontFamily: "SourceSansPro-Regular", }}>300.00 ₺</Text>
                        </View>
                    </View>
                    <View style={{
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
                </View>
            </ScrollView>
        </View>
    )
}

export default Magaza; 