import React from 'react'
import { Drawer } from "expo-router/drawer";
import Text from '../../element/CustomText';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../drawer/Drawer';
import { useAuth } from '@/contexts/hooks/useAuthContext';
import color from '@/constants/color';

export default function Navbar() {
    const navigation = useNavigation();
    const { user } = useAuth()
    return (
        // {/* drawer navbar */ }
        < Drawer
            screenOptions={{
                headerTitle: "",
                headerStyle: styles.navbar,
                headerLeft: () => (
                    <Text
                        style={{ color: "white", marginLeft: 20 }}
                    >
                        Logo
                    </Text>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.dispatch(DrawerActions.toggleDrawer());
                        }}
                        style={[{ marginRight: 20 }]}
                    >
                        <Ionicons name="menu" size={24} color={color.primary} />
                    </TouchableOpacity>
                ),
            }
            }
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        />
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: color.tertiary,
    }
})