import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import HorizontalScrollView from '../../companent/product/HorizontalScrollView';
const Home = () => {
    return (
        <View style={{ backgroundColor: "white" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: 380, borderRadius: 10, position: "absolute", top: 12, left: 15, borderBottomWidth: 0.7, }}>
                    <Icon style={{ color: "gray", paddingTop: 10, paddingLeft: 5 }} name="search" size={25} ></Icon>
                    <TextInput placeholder='Ürün veya kategori ara'></TextInput>
            
                </View>
                <View style={{ width: 3000 }}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={{
                            flexDirection: "row", paddingTop: 90, alignItems: "center"
                        }}>
                            <View style={{
                                flexDirection: "column", paddingLeft: 10,
                            }}>
                               {/* <ViewPars name="" price="" image="" salePrice="" sku="" share="" stock="false" id="" /> */}
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
                <View style={{ paddingTop: 10, paddingLeft: 5, paddingRight: 10 }}>
                    <Text style={{ paddingLeft: 10, fontSize: 26, color: "black", fontFamily: "ShipporiMinchoB1-Bold", paddingTop: 15, paddingBottom: 15 }}>En Popülerler</Text>
                    <HorizontalScrollView ></HorizontalScrollView>
                    <Text style={{ paddingLeft: 10, fontSize: 26, color: "black", fontFamily: "ShipporiMinchoB1-Bold", paddingTop: 30, paddingBottom: 15 }}>Yeni Sezon</Text>
                    <HorizontalScrollView ></HorizontalScrollView>
                    <Text style={{ paddingLeft: 10, fontSize: 26, color: "black", fontFamily: "ShipporiMinchoB1-Bold", paddingTop: 30, paddingBottom: 15 }}>En yeniler</Text>
                    <HorizontalScrollView></HorizontalScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home; 