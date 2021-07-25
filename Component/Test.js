import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import {Container, Header} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Hoshi} from 'react-native-textinput-effects';
import shopData from './ShopData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [
        // {
        //   id: 0,
        //   name: 'Hoddie',
        //   // image: require('./picture2.png'),
        //   image: 'https://4.imimg.com/data4/GH/SL/MY-9457126/12345-500x500.jpg',
        //   quantity: 5,
        //   price: 300,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 1,
        //   name: 'Jacket',
        //   image:
        //     'https://www.expocafeperu.com/w/2020/04/winter-coat-men-sale-canada-mens-nike-jacket-designer-clearance-trench-slim-fit-wool-uk-warm-coats-4xl-fashion-2020-wear-superdry-cheap-olukai-ohana-women-yoga.jpg',
        //   quantity: 10,
        //   price: 400,
        //   add_to_cart: true,
        //   product_size: ['M', 'L', 'XL'],
        //   product_color: ['blue', 'green', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 2,
        //   name: 'Hoddie',
        //   image:
        //     'https://ae01.alicdn.com/kf/H5bbdf4407ec74cee88d9d709707ece5b7/Hoodies-Men-2020-Spring-Fashion-Tracksuit-Sweatshirt-Men-s-Winter-Long-Sleeves-Pullover-Hoodie-Sports-Sweatshirts.jpg',
        //   quantity: 5,
        //   price: 350,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 3,
        //   name: 'Shirt',
        //   image:
        //     'https://images-na.ssl-images-amazon.com/images/I/513favBlpgL._UX569_.jpg',
        //   quantity: 3,
        //   price: 200,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 4,
        //   name: 'jacket',
        //   image:
        //     'https://images-na.ssl-images-amazon.com/images/I/61qGsFu6mNL._UL1024_.jpg',
        //   quantity: 3,
        //   price: 300,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 5,
        //   name: 'T-shirt',
        //   image:
        //     'https://www.rollingstone.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-21-at-12.34.06.png?w=856',
        //   quantity: 3,
        //   price: 150,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 6,
        //   name: 'shose',
        //   image:
        //     "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/IND/fmt/png/Flyer-Runner-Engineered-Knit-SoftFoam+-Men's-Running-Shoes",
        //   quantity: 3,
        //   price: 600,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
        // {
        //   id: 7,
        //   name: 'socks',
        //   image:
        //     'https://www.dim.com/dw/image/v2/AARR_PRD/on/demandware.static/-/Sites-dim-master/default/dw00b2106a/D025WM2-0HY_01.jpg?sw=600&sh=600&sm=fit',
        //   quantity: 3,
        //   price: 20,
        //   add_to_cart: true,
        //   product_size: ['S', 'M', 'L', 'XL'],
        //   product_color: ['red', 'yellow', 'grey'],
        //   select_size: '',
        //   select_color: '',
        //   heart_active: true,
        //   product_count: 0,
        // },
      ],
      collection: [
        {
          type: 'All',
        },
        {
          type: 'Hoddie',
        },
        {
          type: 'Jacket',
        },
        {
          type: 'Pants',
        },
        {
          type: 'T-shirt',
        },
        {
          type: 'shose',
        },
        {
          type: 'Socks',
        },
      ],
      modalvisiable: false,
      showsearch: false,
      details: {},
      cart: [],
      couponVisable: false,
      coupon: '',
      modalvisiable2: false,
      detailscolor: true,
      reviewcolor: false,
      showtext: true,
      price: '',
      Total_price: '',
      modalvisiable3: false,
      name: '',
      lastname: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      address: '',
      card: '',
      idcard: '',
      cardnum: '',
      validity: '',
      cvv: '',
      modalvisiable4: false,
      modalvisiable5: false,
    };
  }

  componentDidMount() {
    // let Products = this.state.Products;
    // for (var i = 0; i < Products.length; i++) {
    //   Products[i].view = true;
    // }
    // this.setState({Products: Products});
    // -----------------------------------
    // this.setData();
    this.getData();
  }

  // async setData() {
  //   let arr = [1, 2, 3];
  //   await AsyncStorage.setItem('name', JSON.stringify(arr));
  // }
  // async getData() {
  //   console.log(await AsyncStorage.getItem('name'));
  // }

  async getData() {
    let Products = shopData;

    // ------------------add view to objects for searchfun----------------
    for (var i = 0; i < Products.length; i++) {
      Products[i].view = true;
    }
    // ---------------------------
    this.setState({Products: Products});
  }

  makesearchfun(value) {
    let Products = this.state.Products;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].name.toUpperCase().includes(value.toUpperCase())) {
        Products[i].view = true;
      } else {
        Products[i].view = false;
      }
    }
    this.setState({Products: Products});
  }

  makesearchfun2(item, index) {
    let Products = this.state.Products;
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].name.toUpperCase().includes(item.toUpperCase())) {
        Products[i].view = true;
      } else if (item == 'All') {
        Products[i].view = true;
      } else {
        Products[i].view = false;
      }
    }
    this.setState({Products: Products});
  }

  calculateTotalPrice() {
    let cart = this.state.cart;
    // for (var i = 0; i < Product.length; i++) {
    //   sum += Product[i].price;
    // }
    let sum = 0;
    cart.map((item, index) => {
      sum += item.price * item.product_count;
    });

    // alert(sum);
    if (this.state.coupon == '') {
      this.setState({price: sum});
    } else {
      if (this.state.coupon == '#25DE9') {
        let sumcoupon = sum - (sum * 25) / 100;
        this.setState({price: sumcoupon});
      } else if (this.state.coupon == '#1D10C') {
        let sumcoupon = sum - (sum * 10) / 100;
        this.setState({price: sumcoupon});
      } else {
        this.setState({price: sum});
      }
    }
  }

  Deletfun(item, index) {
    let cart = this.state.cart;
    item.add_to_cart = true;
    item.product_count = 0;
    cart.splice(index, 1);
    this.setState({cart: cart});
    this.calculateTotalPrice();
  }

  minfun(item, index) {
    let cart = this.state.cart;
    if (item.product_count > 0) {
      item.product_count -= 1;
    }
    this.setState({cart: cart});
  }

  plusfun(item, index) {
    let cart = this.state.cart;
    item.product_count += 1;
    this.setState({cart: cart});
  }

  heartfun(value, index) {
    let Products = this.state.Products;
    Products[index].heart_active = !value;
    // alert(Products[index].heart_active);
    // alert(value);
    this.setState({Products: Products});
  }

  checkconfirm() {
    if (
      this.state.name == '' ||
      this.state.lastname == '' ||
      this.state.email == '' ||
      this.state.phone == '' ||
      this.state.country == '' ||
      this.state.city == '' ||
      this.state.address == '' ||
      this.state.card == '' ||
      this.state.idcard == '' ||
      this.state.cardnum == '' ||
      this.state.validity == '' ||
      this.state.cvv == ''
    ) {
      alert('Complet your information please');
    } else {
      this.setState({modalvisiable4: true});
    }
  }

  closemodel() {
    let cart = this.state.cart;
    if (cart.length == 0) {
      this.setState({modalvisiable2: false});
    }
  }

  couponfun() {
    if (this.state.coupon == '#25DE9') {
      this.calculateTotalPrice();
      alert('You have 25% discount');
    } else if (this.state.coupon == '#1D10C') {
      this.calculateTotalPrice();
      alert('You have 10% discount');
    }else if (this.state.coupon == "") {
      alert("you didn't enter any coupon");
      this.setState({ couponVisable: false });
    }  else {
      alert('This coupon has expired');
    }
  }

  renderproductlist() {
    return this.state.Products.map((item, index) => {
      return (
        <>
          {item.view ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({modalvisiable: true, details: item});
                // alert(index);
                // alert(JSON.stringify(item));
              }}>
              <View
                style={{
                  // backgroundColor: 'yellow',
                  width: 150,
                  height: 180,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}>
                <View
                  style={{
                    flex: 3,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                  }}>
                  <Image
                    // source={item.image}
                    source={{uri: item.image}}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 15,
                      resizeMode: 'center',
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'blue',
                    flex: 0.5,
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    let value = item.heart_active;
                    // alert(value);
                    this.heartfun(value, index);
                  }}
                  style={{
                    position: 'absolute',
                    left: 130,
                    top: 10,
                    // backgroundColor: 'yellow',
                  }}>
                  <Icon
                    name="heart"
                    size={15}
                    style={{color: item.heart_active ? '#000' : 'orange'}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ) : null}
        </>
      );
    });
  }

  renderCatgory() {
    return (
      <View
        style={{
          width: '95%',
          height: 50,
          marginLeft: '5%',
          // backgroundColor: 'yellow',
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          style={{flexDirection: 'row'}}>
          {this.state.collection.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.calculateTotalPrice();
                  this.makesearchfun2(item.type, index);
                }}
                style={{
                  width: 60,
                  height: 35,
                  backgroundColor: '#D4D6D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: '#9EA2A2'}}>
                  {item.type}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
      <Container style={{backgroundColor: '#F2ECFF'}}>
        {/* <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* ---------------------- */}
          <View
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              marginTop: 5,
              // backgroundColor: 'green',
              flexDirection: 'row',
            }}>
            {/* ---- */}
            <View
              style={{
                flex: 1,
                // backgroundColor: 'red',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  alignItems: 'center',
                  borderWidth: 0.5,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#ddd'}}>●</Text>
                  <Text style={{color: '#ddd'}}>●</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#ddd'}}>●</Text>
                  <Text style={{color: '#ddd'}}>●</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* ---- */}
            <View
              style={{
                flex: 3,
                // backgroundColor: 'grey',
                alignItems: 'center',
              }}>
              {this.state.showsearch ? (
                <View
                  style={{
                    // backgroundColor: 'blue',
                    width: '90%',
                    height: 40,
                    borderRadius: 25,
                    borderWidth: 0.5,
                  }}>
                  <TextInput
                    placeholder="Search"
                    onChangeText={value => {
                      this.makesearchfun(value);
                    }}
                  />
                </View>
              ) : null}
            </View>
            {/* ---- */}
            <View
              style={{
                flex: 1,
                // backgroundColor: 'red',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  let x = this.state.showsearch;
                  this.setState({showsearch: !x});
                }}
                style={{
                  // backgroundColor: 'red',
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                }}>
                <Icon name="search" size={17} />
              </TouchableOpacity>
            </View>
            {/* ---- */}
            <View
              style={{
                flex: 1,
                // backgroundColor: 'yellow',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() => {
                //   this.setState({modalvisiable2: true});
                // }}
                onPress={() => {
                  // alert(JSON.stringify(this.state.cart));
                  {
                    this.state.cart.length == 0
                      ? alert('Your Cart is empty choose any thing to full it')
                      : this.setState({modalvisiable2: true});
                    this.calculateTotalPrice();
                  }
                }}
                style={{
                  // backgroundColor: 'blue',
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                }}>
                <Icon name="shopping-cart" size={17} />
              </TouchableOpacity>
            </View>
            {/* ---- */}
          </View>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#E7A94C',
              borderRadius: 10,
              position: 'absolute',
              right: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.cart.length}</Text>
          </View>
          {/* ---------------------- */}
          {this.renderCatgory()}
          {/* ---------------------- */}
          <View style={{marginHorizontal: '5%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>
              Recommanded for you
            </Text>
            <Text>Based on Search</Text>
          </View>
          {/* ---------------------- */}
          <ScrollView showsVerticalScrollIndicator>
            <View
              style={{
                // backgroundColor: 'yellow',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              {/* ----------------- */}
              {this.renderproductlist()}
              {/* ----------------- */}
            </View>
            <View style={{width: 50, height: 50}}></View>
          </ScrollView>
        </ScrollView>
        {/* ----------------- */}
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#252060',
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // marginHorizontal: '5%',
          }}>
          <TouchableOpacity>
            <Icon name="home" size={24} style={{color: '#fff'}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="shopping-cart" size={24} style={{color: '#fff'}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={24} style={{color: '#fff'}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="user" size={24} style={{color: '#fff'}} />
          </TouchableOpacity>
        </View>
        {/* -------------------------------------------------- */}
        {/* ---------------------modal------------------------ */}

        <Modal
          visible={this.state.modalvisiable}
          onRequestClose={() => {
            this.setState({modalvisiable: false});
          }}>
          <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '100%',
                  height: 360,
                  backgroundColor: 'yellow',
                }}>
                <Image
                  source={{uri: this.state.details.image}}
                  style={{flex: 1, width: null, height: null}}
                />
              </View>

              {/* --------------icons----------------- */}
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalvisiable: false});
                }}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#000',
                  borderRadius: 25,
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="chevron-left" size={20} style={{color: '#fff'}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#E2E7E7',
                  borderRadius: 25,
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="shopping-bag" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#E2E7E7',
                  borderRadius: 25,
                  position: 'absolute',
                  top: 280,
                  right: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  name="heart"
                  size={20}
                  style={{
                    color: this.state.details.heart_active ? '#000' : 'orange',
                  }}
                />
              </TouchableOpacity>
              {/* ------------------------------- */}
              <View
                style={{
                  width: '100%',
                  // backgroundColor: 'red',
                  height: 340,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}>
                <View
                  style={{
                    width: '90%',
                    marginHorizontal: '5%',
                    marginTop: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 24}}>{this.state.details.name}</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    ${this.state.details.price}
                  </Text>
                </View>
                <View style={{width: '90%', marginHorizontal: '5%'}}>
                  <Text>(price incl 21% vat)</Text>
                </View>
                {/* ----- */}
                <View
                  style={{width: '90%', marginHorizontal: '5%', marginTop: 10}}>
                  <Text style={{fontSize: 18}}>Choose Size</Text>
                  <View style={{flexDirection: 'row'}}>
                    {/* ----------size------------ */}
                    {this.state.details &&
                    Object.keys(this.state.details).length !== 0
                      ? this.state.details.product_size.map(
                          (item_size, index_size) => {
                            return (
                              <TouchableOpacity
                                onPress={() => {
                                  let details = this.state.details;
                                  details.select_size = item_size;
                                  this.setState({details: details});
                                  // alert(this.state.details.select_size);
                                }}
                                style={{
                                  width: 50,
                                  height: 50,
                                  borderRadius: 20,
                                  backgroundColor: 'yellow',
                                  marginRight: 5,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderWidth: 1,
                                }}>
                                <Text style={{fontSize: 18}}>{item_size}</Text>
                              </TouchableOpacity>
                            );
                          },
                        )
                      : null}

                    {/* ----------------- */}
                  </View>
                </View>
                {/* ---------color------- */}
                <View
                  style={{
                    width: '15%',
                    height: 120,
                    backgroundColor: '#E2E7E7',
                    position: 'absolute',
                    right: 10,
                    top: 30,
                    borderRadius: 10,
                  }}>
                  {/* ---- */}
                  {this.state.details &&
                  Object.keys(this.state.details).length !== 0
                    ? this.state.details.product_color.map(
                        (item_color, index_color) => {
                          return (
                            <View
                              style={{
                                flex: 1,
                                // backgroundColor: 'yellow',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  let details = this.state.details;
                                  details.select_color = item_color;
                                  this.setState({details: details});
                                  // alert(this.state.details.select_color);
                                }}
                                style={{
                                  width: 30,
                                  height: 30,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRadius: 20,
                                  backgroundColor: '#fff',
                                  borderWidth: 2,
                                  borderColor: item_color,
                                }}>
                                <View
                                  style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 20,
                                    backgroundColor: item_color,
                                  }}></View>
                              </TouchableOpacity>
                            </View>
                          );
                        },
                      )
                    : null}
                  {/* ---- */}
                </View>
                {/* ---------------Details&&Review-------------- */}
                <View
                  style={{
                    width: '90%',
                    height: 110,
                    // backgroundColor: 'green',
                    marginHorizontal: '5%',
                    marginTop: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '60%',
                      height: 30,
                      // backgroundColor: 'red',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          detailscolor: true,
                          reviewcolor: false,
                          showtext: true,
                        });
                      }}>
                      <Text style={{fontSize: 18}}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          detailscolor: false,
                          reviewcolor: true,
                          showtext: false,
                        });
                      }}>
                      <Text style={{fontSize: 18}}>Review</Text>
                    </TouchableOpacity>
                  </View>
                  {/* ----- */}
                  <View
                    style={{
                      width: '60%',
                      height: 3,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                    }}>
                    {this.state.detailscolor ? (
                      <View
                        style={{
                          width: '50%',
                          height: 3,
                          backgroundColor: 'yellow',
                        }}></View>
                    ) : null}
                    {this.state.reviewcolor ? (
                      <View
                        style={{
                          width: '100%',
                          height: 3,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            width: '50%',
                            height: 3,
                            backgroundColor: '#fff',
                          }}></View>
                        <View
                          style={{
                            width: '50%',
                            height: 3,
                            backgroundColor: 'yellow',
                          }}></View>
                      </View>
                    ) : null}
                    {/* ----- */}
                  </View>
                  {/* ----- */}
                  <View style={{marginHorizontal: 5}}>
                    {this.state.showtext ? (
                      <Text>
                        Activ is one of the most proprietary brands in the
                        sports fields. We are adhering to be existed as a strong
                        supporter of the various kinds of athletic activities.
                        Not only we became a sponsor of many football teams,
                        young champions.
                      </Text>
                    ) : (
                      <Text>
                        The material is very good and the price is very
                        reasonable😍👌
                      </Text>
                    )}
                  </View>
                </View>
                {/* ----- */}
                {this.state.details.add_to_cart ? (
                  <TouchableOpacity
                    onPress={() => {
                      let details = this.state.details;
                      if (
                        details.select_size == '' &&
                        details.select_color == ''
                      ) {
                        alert('you shoud choose Size and Color');
                      } else if (details.select_size == '') {
                        alert('Youe shoud choose Size');
                      } else if (details.select_color == '') {
                        alert('Youe shoud choose color');
                      } else {
                        let cart = this.state.cart;
                        let details = this.state.details;
                        details.add_to_cart = false;
                        cart.push(details);
                        this.setState({
                          modalvisiable: false,
                          show: false,
                          cart: cart,
                        });
                      }
                    }}
                    // onPress={() => {
                    //   let cart = this.state.cart;
                    //   let details = this.state.details;
                    //   let cartcounter = this.state.cartcounter;
                    //   details.add_to_cart = false;
                    //   cart.push(details);
                    //   cartcounter += 1;
                    //   this.setState({
                    //     modalvisiable: false,
                    //     cartcounter: cartcounter,
                    //     show: false,
                    //   });
                    // }}
                    style={{
                      width: '85%',
                      height: 50,
                      marginHorizontal: '7.5%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#E7A94C',
                      borderRadius: 15,
                      marginTop: 10,
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="shopping-bag"
                      size={20}
                      style={{marginRight: 10, color: '#fff'}}
                    />
                    <Text style={{fontWeight: 'bold', color: '#fff'}}>
                      Add To Cart
                    </Text>
                  </TouchableOpacity>
                ) : null}

                {/* ----- */}
              </View>
              {/* ---------------------- */}
            </ScrollView>
          </Container>
        </Modal>
        {/* -------------------------------------------------- */}
        {/* ---------------------modal2------------------------ */}
        <Modal
          visible={this.state.modalvisiable2}
          onRequestClose={() => {
            this.setState({modalvisiable2: false});
          }}>
          <Container style={{backgroundColor: '#F2ECFF'}}>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'space-between',
                // margin: '5%',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({modalvisiable2: false});
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#000',
                    marginLeft: '5%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="chevron-left" size={20} style={{color: '#fff'}} />
                </TouchableOpacity>
                <Text
                  style={{paddingLeft: 10, fontWeight: 'bold', fontSize: 15}}>
                  Cart
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#000',
                  marginRight: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="bookmark" size={20} style={{color: '#fff'}} />
              </TouchableOpacity>
            </View>
            {/* ------------------------------------------ */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '100%',
                }}>
                {this.state.cart.map((item, index) => {
                  return (
                    <View
                      style={{
                        width: '90%',
                        height: 130,
                        marginHorizontal: '5%',
                        backgroundColor: '#fff',
                        marginTop: '5%',
                        borderRadius: 15,
                        flexDirection: 'row',
                      }}>
                      {/* -------------- */}
                      <View
                        style={{
                          flex: 1.3,
                          // backgroundColor: 'yellow',
                          borderTopLeftRadius: 15,
                          borderBottomLeftRadius: 15,
                        }}>
                        <View
                          style={{
                            width: '90%',
                            height: 100,
                            // backgroundColor: 'red',
                            marginHorizontal: '5%',
                            marginTop: '5%',
                            borderRadius: 15,
                          }}>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              width: null,
                              height: null,
                              flex: 1,
                              borderRadius: 15,
                            }}
                          />
                        </View>
                        <TouchableOpacity>
                          <Text
                            style={{
                              alignSelf: 'center',
                              textDecorationLine: 'underline',
                              color: '#E59C41',
                            }}>
                            Save for later
                          </Text>
                        </TouchableOpacity>
                      </View>
                      {/* ------------------ */}
                      <View
                        style={{
                          flex: 2,
                          // backgroundColor: 'green'
                        }}>
                        <View style={{marginLeft: '5%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                              Winter Clothes
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                this.Deletfun(item, index);
                                this.setState({add_to_cart: false});
                                this.closemodel();
                              }}
                              style={{
                                width: 25,
                                height: 25,
                                borderRadius: 20,
                                backgroundColor: '#F2ECFF',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 10,
                                marginTop: 5,
                              }}>
                              <Icon
                                name="trash-alt"
                                size={17}
                                style={{color: '#DD497E'}}
                              />
                            </TouchableOpacity>
                          </View>
                          <Text>Price:${item.price}</Text>
                          <Text>Size:Large</Text>
                          <Text>Color:Black</Text>
                          <View
                            style={{
                              width: '60%',
                              flexDirection: 'row',
                              // backgroundColor: 'red',
                              justifyContent: 'space-between',
                            }}>
                            <TouchableOpacity
                              onPress={() => {
                                this.minfun(item, index);
                                this.calculateTotalPrice();
                              }}
                              style={{
                                width: 25,
                                height: 25,
                                backgroundColor: 'grey',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                              }}>
                              <Icon name="minus" />
                            </TouchableOpacity>
                            <View
                              style={{
                                flex: 2,
                                // backgroundColor: 'yellow',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Text style={{fontWeight: 'bold'}}>
                                {item.product_count}
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                this.plusfun(item, index);
                                this.calculateTotalPrice();
                              }}
                              style={{
                                width: 25,
                                height: 25,
                                backgroundColor: 'grey',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                              }}>
                              <Icon name="plus" />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
                {/* ------------------ */}
              </View>
            </ScrollView>
            {/* ------------------------------------ */}
            <View
              style={{
                width: '100%',
                height: 200,
                backgroundColor: '#fff',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              {/* ---------- */}
              <View
                style={{
                  flex: 2.5,
                  marginTop: 10,
                  //  backgroundColor: 'yellow'
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '5%',
                  }}>
                  <Text style={{fontSize: 18}}>Price</Text>
                  <Text style={{fontSize: 18}}>${this.state.price}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '5%',
                  }}>
                  <Text style={{fontSize: 18}}>Tip</Text>
                  <Text style={{fontSize: 18}}>$10</Text>
                </View>
                {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '5%',
                  }}>
                  <Text style={{fontSize: 18}}>Delivery</Text>
                  <Text style={{fontSize: 18}}>$20</Text>
                </View> */}
              </View>
              {/* -------------- */}
              <View
                style={{
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  width: '90%',
                  marginHorizontal: '5%',
                }}>
                <Text style={{color: '#ddd'}}>●</Text>

                <View
                  style={{backgroundColor: '#ddd', width: '90%', height: 3}}
                />
                <View>
                  <Text style={{color: '#ddd'}}>●</Text>
                </View>
              </View>
              {/* -------------- */}
              <View
                style={{
                  flex: 1.5,
                  // backgroundColor: 'blue',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '5%',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>ToTal</Text>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  ${this.state.price + 10}
                </Text>
              </View>

              {/* -------------- */}
              <View
                style={{
                  flex: 2,
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.coupon == '') {
                      this.setState({couponVisable: true});
                    } else {
                      this.setState({modalvisiable3: true});
                    }
                  }}
                  style={{
                    width: '80%',
                    height: 50,
                    backgroundColor: 'grey',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 10,
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    Press To Payment
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Container>
        </Modal>
        {/* -------------------------------------------------- */}
        {/* ---------------------modal3------------------------ */}
        <Modal
          visible={this.state.modalvisiable3}
          onRequestClose={() => {
            this.setState({modalvisiable3: false});
          }}>
          <>
            <View
              style={{
                width: 230,
                height: 230,
                borderRadius: 115,
                backgroundColor: '#5EC2B7',
                position: 'absolute',
                left: 10,
                top: -50,
              }}></View>
            <View
              style={{
                width: 230,
                height: 230,
                borderRadius: 115,
                backgroundColor: '#13A090',
                position: 'absolute',
                left: -45,
                top: -25,
                //   alignContent: 'center',
                justifyContent: 'center',
              }}></View>
            {/* ----- */}
            <ScrollView showsVerticalScrollIndicator>
              <View
                style={{
                  width: '100%',
                  height: 50,
                  marginTop: 10,
                  // backgroundColor: 'green',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Enter Your Information
                </Text>
              </View>
              {/* ------------------Textinput----------------- */}
              <View
                style={{
                  width: '90%',
                  marginTop: 10,
                  marginHorizontal: '5%',
                  // backgroundColor: 'yellow',
                }}>
                {/* --first name-- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'first name'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.name}
                    onChangeText={value => {
                      this.setState({name: value});
                    }}
                  />
                </View>
                {/* --------last name--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'last name'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.lastname}
                    onChangeText={value => {
                      this.setState({lastname: value});
                    }}
                  />
                </View>
                {/* --------email--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'email'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    keyboardType="email-address"
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.email}
                    onChangeText={value => {
                      this.setState({email: value});
                    }}
                  />
                </View>
                {/* --------phone--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'phone'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    maxLength={11}
                    keyboardType="phone-pad"
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.phone}
                    onChangeText={value => {
                      this.setState({phone: value});
                    }}
                  />
                </View>
                {/* --------country--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'country'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.country}
                    onChangeText={value => {
                      this.setState({country: value});
                    }}
                  />
                </View>
                {/* --------city--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'city'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.city}
                    onChangeText={value => {
                      this.setState({city: value});
                    }}
                  />
                </View>
                {/* --------adress--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'adress'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.address}
                    onChangeText={value => {
                      this.setState({address: value});
                    }}
                  />
                </View>
                {/* --------card--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={"card hold's name"}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.card}
                    onChangeText={value => {
                      this.setState({card: value});
                    }}
                  />
                </View>
                {/* --------id card--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'id card'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    keyboardType="numeric"
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.idcard}
                    onChangeText={value => {
                      this.setState({idcard: value});
                    }}
                  />
                </View>
                {/* --------card num--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'credit card number'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    keyboardType="numeric"
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.cardnum}
                    onChangeText={value => {
                      this.setState({cardnum: value});
                    }}
                  />
                </View>
                {/* --------validity--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'validity'}
                    borderColor={'#5EC2B7'}
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.validity}
                    onChangeText={value => {
                      this.setState({validity: value});
                    }}
                  />
                </View>
                {/* --------cvv--------- */}
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    marginBottom: 10,
                    // backgroundColor: 'green',
                  }}>
                  <Hoshi
                    label={'cvv'}
                    borderColor={'#5EC2B7'}
                    keyboardType="numeric"
                    style={{
                      width: '100%',
                      paddingLeft: 15,
                    }}
                    borderHeight={2}
                    labelStyle={{
                      color: '#C9CCCC',
                    }}
                    inputStyle={{color: '#000'}}
                    value={this.state.cvv}
                    onChangeText={value => {
                      this.setState({cvv: value});
                    }}
                  />
                </View>
                {/* -------------------- */}
              </View>
              {/* --------confirm-------- */}
              <TouchableOpacity
                onPress={() => {
                  this.checkconfirm();
                }}
                style={{
                  width: '90%',
                  height: 60,
                  marginHorizontal: '5%',
                  backgroundColor: '#5EC2B7',
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    // fontFamily: fontFamily,
                    fontStyle: 'normal',
                  }}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        </Modal>
        {/* -----------------------modal4--------------------------- */}
        <Modal
          visible={this.state.modalvisiable4}
          onRequestClose={() => {
            this.setState({modalvisiable4: false});
          }}>
          <>
            <View
              style={{
                width: 230,
                height: 230,
                borderRadius: 115,
                backgroundColor: '#5EC2B7',
                position: 'absolute',
                left: 10,
                top: -50,
              }}></View>
            <View
              style={{
                width: 230,
                height: 230,
                borderRadius: 115,
                backgroundColor: '#13A090',
                position: 'absolute',
                left: -45,
                top: -25,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{marginLeft: 60, fontWeight: 'bold', fontSize: 18}}>
                Dear,{this.state.name}{' '}
              </Text>
              <Text style={{marginLeft: 60, fontSize: 18}}>
                successful operation
              </Text>
              <Text style={{marginLeft: 60, fontSize: 18}}>
                Total: ${this.state.price + 10}
              </Text>
            </View>
            {/* ---- */}
            <ScrollView showsVerticalScrollIndicator>
              <View
                style={{
                  width: '90%',
                  height: 200,
                  marginHorizontal: '5%',
                  // backgroundColor: 'yellow',
                  marginTop: 250,
                }}>
                <Image
                  source={require('./suc.png')}
                  style={{width: '100%', height: 200, resizeMode: 'contain'}}
                />
              </View>
              {/* -----------delivery---------------- */}
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalvisiable5: true});
                }}
                style={{
                  width: '90%',
                  height: 60,
                  marginHorizontal: '5%',
                  backgroundColor: '#5EC2B7',
                  borderRadius: 30,
                  marginTop: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    // fontFamily: fontFamily,
                    fontStyle: 'normal',
                  }}>
                  Delivery
                </Text>
              </TouchableOpacity>
              {/* --------finish-------- */}
              <TouchableOpacity
                onPress={() => {
                  let originalData = this.state.Products;
                  for (let i = 0; i < originalData.length; i++) {
                    originalData[i].add_to_cart = true;
                    originalData[i].product_count = 0;
                  }
                  this.setState({
                    modalvisiable4: false,
                    modalvisiable3: false,
                    modalvisiable2: false,
                    cart: [],
                    Products: originalData,
                    coupon: '',
                    name: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    country: '',
                    city: '',
                    address: '',
                    card: '',
                    idcard: '',
                    cardnum: '',
                    validity: '',
                    cvv: '',
                  });
                }}
                style={{
                  width: '90%',
                  height: 60,
                  marginHorizontal: '5%',
                  backgroundColor: '#5EC2B7',
                  borderRadius: 30,
                  marginTop: 10,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    // fontFamily: fontFamily,
                    fontStyle: 'normal',
                  }}>
                  finish
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        </Modal>
        {/* ---------------Enter coupon------------------------ */}
        <Modal
          visible={this.state.couponVisable}
          onRequestClose={() => {
            this.setState({
              couponVisable: false,
            });
          }}
          transparent={true}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: '10%',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                elevation: 5,
                padding: 15,
                width: '100%',
                borderRadius: 8,
              }}>
              <View>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: '800',
                    fontSize: 20,
                  }}>
                  Coupon
                </Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#ccc',
                  marginVertical: 20,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 100,
                  marginBottom: 15,
                  backgroundColor: '#e7e7e7',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="money-check-alt" size={24} />
                </View>
                <TextInput
                  value={this.state.coupon}
                  autoCorrect={false}
                  placeholder="Enter Your Coupon ..#4dew25"
                  style={{flex: 1}}
                  onChangeText={value => {
                    this.setState({
                      coupon: value.trim(),
                    });
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({couponVisable: false});
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'red',
                    width: '35%',
                    height: 40,
                    padding: 10,
                    alignSelf: 'center',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#fff'}}>Canel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({couponVisable: false});
                    this.couponfun();
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'green',
                    width: '35%',
                    height: 40,
                    padding: 10,
                    alignSelf: 'center',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                    }}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* -----------delivery model---------------- */}
        <Modal
          visible={this.state.modalvisiable5}
          onRequestClose={() => {
            this.setState({modalvisiable5: false});
          }}>
          <>
            <View
              style={{
                width: 230,
                height: 230,
                borderRadius: 115,
                backgroundColor: '#5EC2B7',
                position: 'absolute',
                left: 10,
                top: -50,
              }}></View>
            <View
              style={{
                width: 230,
                height: 230,
                borderRadius: 115,
                backgroundColor: '#13A090',
                position: 'absolute',
                left: -45,
                top: -25,
                //   alignContent: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  // backgroundColor: 'yellow',
                  marginLeft: 60,
                }}>
                <Image
                  source={require('./delivery.png')}
                  style={{
                    width: null,
                    height: null,
                    flex: 1,
                    borderRadius: 60,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text style={{marginLeft: 60}}>Delivery company</Text>
            </View>
            {/* ----- */}
            <ScrollView showsVerticalScrollIndicator>
              <View
                style={{
                  width: '90%',
                  marginHorizontal: '5%',
                  // backgroundColor: 'yellow',
                  marginTop: 210,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Dear:{this.state.name}
                </Text>
                <Text style={{fontSize: 18}}>
                  Your phone are :{this.state.phone}
                </Text>

                <Text style={{fontSize: 18}}>Your order are :</Text>
              </View>
              <View
                style={{
                  width: '90%',
                  marginHorizontal: '5%',
                  backgroundColor: '#5EC2B7',
                  marginTop: 10,
                  borderRadius: 20,
                  paddingHorizontal: '5%',
                  paddingVertical: '5%',
                }}>
                {/* ----- */}
                {this.state.cart.map((item, index) => {
                  return (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{fontSize: 18}}>{item.name}</Text>
                        <Text style={{fontSize: 18}}>
                          {item.product_count}piece
                        </Text>
                        <Text style={{fontSize: 18}}>{item.price}$</Text>
                      </View>
                      <View
                        style={{
                          width: '90%',
                          height: 5,
                          borderRadius: 20,
                          backgroundColor: '#13A090',
                          marginHorizontal: '5%',
                        }}></View>
                    </View>
                  );
                })}
                {/* -------- */}
              </View>
              {/* ---- */}
              <View style={{width: '90%', marginHorizontal: '5%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 20}}>
                  Delivery service 20$
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>
                  Your receipt = ${this.state.price + 30}
                </Text>
              </View>
              {/* ---- */}
              <TouchableOpacity
                onPress={() => {
                  let originalData = this.state.Products;
                  for (let i = 0; i < originalData.length; i++) {
                    originalData[i].add_to_cart = true;
                    originalData[i].product_count = 0;
                  }
                  this.setState({
                    modalvisiable5: false,
                    modalvisiable4: false,
                    modalvisiable3: false,
                    modalvisiable2: false,
                    cart: [],
                    Products: originalData,
                    coupon: '',
                    name: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    country: '',
                    city: '',
                    address: '',
                    card: '',
                    idcard: '',
                    cardnum: '',
                    validity: '',
                    cvv: '',
                  });
                }}
                style={{
                  width: '90%',
                  height: 60,
                  marginHorizontal: '5%',
                  backgroundColor: '#5EC2B7',
                  borderRadius: 30,
                  marginTop: 30,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    // fontFamily: fontFamily,
                    fontStyle: 'normal',
                  }}>
                  finish
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        </Modal>
        {/* ------------------- */}
      </Container>
    );
  }
}
