import React, { Component } from "react";
import customSideBarMenu from './CustomSideBarMenu'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { AppTabNavigator } from './AppTabNavigator'
import SettingScreen from "../SideBarScreens/SettingScreen";
import MyDonationScreen from "../SideBarScreens/MyDonationScreen"
import NotificationScreen from "../screens/notificationscreen";

export const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: AppTabNavigator },
    Setting: { screen: SettingScreen },
    MyDonations: {screen: MyDonationScreen },
    Notifications: { screen: NotificationScreen }
},
    {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName: 'Home'
    }


)