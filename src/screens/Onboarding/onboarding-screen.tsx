import { useRef } from "react"
import { FlatList, View, Text, ImageBackground, Dimensions, TouchableOpacity } from "react-native"

import { styles } from "./style"
import { useAuth } from "@/context/authContext"
import { onboardingData } from "./onboarding.data"
import { OnboardingDataProps } from "@/@types/types"

const { width } = Dimensions.get('window')

export function OboardingScreen() {
  const flatlistRef = useRef<FlatList>(null);
  const { completeOnboarding } = useAuth();

  return (
    <View>
      <FlatList<OnboardingDataProps>
       ref={flatlistRef}
       data={onboardingData}
       pagingEnabled
       horizontal
       keyExtractor={(item) => item.id}
       renderItem={({ item, index }) =>  (
        <ImageBackground source={item.image} style={[styles.slide, { width }]}>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.description}>{item.description}</Text>

            {index === onboardingData.length - 1 && (
              <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={completeOnboarding}>
                <Text style={styles.buttonText}>Começar</Text>
              </TouchableOpacity>
              
            )}
            
          </View>
        </ImageBackground>
       )}

      />
    </View>
  )
}