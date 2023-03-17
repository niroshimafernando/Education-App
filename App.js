import * as React from 'react';
import { Text, Button, Image, View, Alert, TextInput, FlatList,StyleSheet ,SafeAreaView,StatusBar,TouchableOpacity,ScrollView,Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo } from "@expo/vector-icons";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column",backgroundColor:'#f9e6ff'}}>


        <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', padding:15}}>Welcome!</Text>

        <Text style={{fontWeight:'bold', fontSize:35, textAlign:'center', padding:5, color:'#9900cc'}}>Book App</Text>

        <Text style={{textAlign:'left',paddingBottom: 7,paddingTop:15, paddingLeft:20}}>Log In</Text>

        <Text style={{textAlign:'center',paddingBottom:7,paddingTop:15}}>Username</Text>
        <TextInput style={{height: 35,width: 240,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30,marginLeft:70, padding:10, placeholder:'Enter Username'}}/>

        <Text style={{textAlign:'center',paddingBottom: 7}}>Password:-</Text>
        <TextInput secureTextEntry={true} style={{height: 35,width: 240,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30,marginLeft:70, padding:10}}/>

        <Text style={{paddingLeft:10, paddingBottom:20, paddingTop:1,color:'blue'}}>

          <Text title="Forgot Password" onPress={() => navigation.navigate('Forgot Password')}>Forgot Password?</Text>  
        </Text>  


        <View style={{paddingLeft:120, width:240}}>
          <Button color="#9900cc" title="Log in" onPress={() => navigation.navigate('Dashboard')}/>
        </View>

        <Text style={{fontWeight:'bold', fontSize:15, textAlign:'left', padding:5, color:'black'}}>Don't you have an account?</Text>


      <View style={{paddingLeft:120, width:240}}>
          <Button color="#9900cc" title="Sign Up" onPress={() => navigation.navigate('Registration')} />
        </View>
    
    </View>
  );
};

const SignupScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>

        <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center', padding:15, color:'#9900cc'}}>Sign Up</Text>
      
        <Text style={{textAlign:'center',paddingBottom: 10}}>Username</Text>
        <TextInput style={{height: 40,width: 300,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30, padding:10}}/>

        <Text style={{textAlign:'center',paddingBottom: 10}}>Password</Text>
        <TextInput secureTextEntry={true} style={{height: 40,width: 300,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30, padding:10,}}/>

        <Text style={{textAlign:'center',paddingBottom: 10}}>Confirm Password</Text>
        <TextInput secureTextEntry={true} style={{height: 40,width: 300,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30, padding:10,}}/>
      
        <Text style={{textAlign:'center',paddingBottom: 10}}>Email</Text>
        <TextInput style={{height: 40,width: 300,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30, padding:10}}/>
      
      <View style={{paddingBottom:10 }}>
          <Button color="#9900cc" title="Register" onPress={() => navigation.navigate('Registared')} />
      </View>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Go to Home" onPress={() => navigation.navigate('Book App')} />
      </View>  
    </View>
  );
};

const Signupsuccessfully = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>

    <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', padding:15}}>Registation Successful!</Text>

       <Image style={{width: 200, height:200,marginTop:20}} 
    source={{uri:"https://hybrid-hse.com/wp-content/uploads/2020/05/Registration-Successful-Check-1-300x300-1.png"}}>
  </Image>


  <View style={{ flex: 1, padding:20, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
      <Button color="#9900cc" title="OK" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
  );
};

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>
        <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center', padding:15, color:'#9900cc'}}>Forgot Password</Text>

        <Text style={{textAlign:'center',paddingBottom: 10}}>Enter new Password</Text>
        <TextInput secureTextEntry={true} style={{height: 40,width: 240,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30, padding:10,}}/>

        <Text style={{textAlign:'center',paddingBottom: 10}}>Email</Text>
        <TextInput style={{height: 40,width: 240,borderColor: '#9900cc',borderWidth: 2, marginBottom: 30, padding:10}}/>

      <View style={{padding:10}}>
        <Button color="#9900cc" title="Reset Password" onPress={() => Alert.alert('Check your email to activate your account!')}/>
      </View>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Go to Home" onPress={() => navigation.navigate('Book App')} />
      </View>  
    </View>
  );
};



function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#f9e6ff'}}>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Action and Adventure" onPress={() => navigation.navigate('Action and Adventure')}/>
      </View>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Classics" onPress={() => navigation.navigate('Classics')}/>
      </View>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Comic Book" onPress={() => navigation.navigate('Comic Book')}/>
      </View>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Mystery Books" onPress={() => navigation.navigate('Mystery Books')}/>
      </View>  
     <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Horror" onPress={() => navigation.navigate('Horror')}/>
      </View>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
        <Button color="#9900cc" title="Cook Books" onPress={() => navigation.navigate('Cook Books')}/>
      </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



const Action_and_Adventure = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column",backgroundColor:'#f9e6ff'}}>
    
    
   <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:20,fontSize:30,marginBottom:15}}>
     
        <Text title="Life of Pie" onPress={() => navigation.navigate('Life of Pie')}>Life of Pie</Text>  
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text title="The Three Musketeers" onPress={() => navigation.navigate('The Three Musketeers')}>The Three Musketeers</Text> 
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text title="The Call of the Wild" onPress={() => navigation.navigate('The Call of the Wild')}>The Call of the Wild</Text> 
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:25,marginBottom:15}}>

        <Text title="The Best Adventures Box Set One" onPress={() => navigation.navigate('The Best Adventures Box Set One')}>The Best Adventures Box Set One</Text> 
        </Text> 

         <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text title="The Adventurers Guild" onPress={() => navigation.navigate('The Adventurers Guild')}>The Adventurers Guild</Text> 
        </Text>  

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text title="The Eye of the North" onPress={() => navigation.navigate('The Eye of the North')}>The Eye of the North</Text> 
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text title="Sink or Swim" onPress={() => navigation.navigate('Sink or Swim')}>Sink or Swim</Text> 
        </Text>   
      
    </View>
  );
};


const Classics = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column",backgroundColor:'#f9e6ff'}}>
    <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>
     
        <Text title="To Kill a Mockingbird" onPress={() => navigation.navigate('To Kill a Mockingbird')}>To Kill a Mockingbird</Text>  
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text title="Little Women" onPress={() => navigation.navigate('Little Women')}>Little Women</Text> 
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Pride and Prejudice</Text> 
        </Text> 
        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>The Great Gatsby </Text> 
        </Text> 
        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Wide Sargasso Sea </Text> 
        </Text> 
        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Brave New World</Text> 
        </Text> 

        
     
    </View>
  );
};

const Comic = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column",backgroundColor:'#f9e6ff'}}>

    <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>
     
        <Text title="Watchmen" onPress={() => navigation.navigate('Watchmen')}>Watchmen</Text>  
        </Text> 

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Batman</Text> 
        </Text>

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Maus</Text> 
        </Text>

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Day tripper</Text> 
        </Text>

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Cat kid comic club</Text> 
        </Text>

        <Text style={{ paddingBottom:2,backgroundColor:'#d966ff',marginTop:10,fontSize:30,marginBottom:15}}>

        <Text>Monsteress</Text> 
        </Text>

    </View>
  );
};

const Mystery = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>

    </View>
  );
};

const Horror = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>

    </View>
  );
};
const Cook_Books = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>

      
    </View>
  );
};
const Life_of_pie = ({ navigation }) => {
  return (
    <ScrollView>
   <View style={{flex:1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>
      <Image style={{width: 300, height:450,marginTop:20}} 
    source={{uri:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292455-51rxEvLljUL.jpg?crop=1xw:0.972xh;center,top&resize=980:*"}}>
  </Image>
  <Text style = {{marginTop:10,fontSize:20}}>Author:Yann Martel</Text>

    <Text style = {{marginTop:10,textAlign:'center'}}>The son of a zookeeper, Pi Patel has an encyclopedic knowledge of animal behavior and a fervent love of stories. When Pi is sixteen, his family emigrates from India to North America aboard a Japanese cargo ship, along with their zoo animals bound for new homes.

The ship sinks. Pi finds himself alone in a lifeboat, his only companions a hyena, an orangutan, a wounded zebra, and Richard Parker, a 450-pound Bengal tiger. Soon the tiger has dispatched all but Pi, whose fear, knowledge, and cunning allow him to coexist with Richard Parker for 227 days while lost at sea. When they finally reach the coast of Mexico, Richard Parker flees to the jungle, never to be seen again. The Japanese authorities who interrogate Pi refuse to believe his story and press him to tell them "the truth." After hours of coercion, Pi tells a second story, a story much less fantastical, much more conventional--but is it more true</Text>
      
      <Text style = {{marginTop:10,fontSize:15}}>Price:1000LKR</Text>
      <Text style = {{marginTop:10}}><u>Buy it</u></Text>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
      <Button color="#9900cc" title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
    </ScrollView>
  );
};
const The_Three_Musketeers = ({ navigation }) => {
  return (
    <ScrollView>
   <View style={{flex:1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>
      <Image style={{width: 300, height:450,marginTop:20}} 
    source={{uri:"https://images-na.ssl-images-amazon.com/images/I/41TxXqToCCL._SX348_BO1,204,203,200_.jpg"}}>
  </Image>
  <Text style = {{marginTop:10,fontSize:20}}>Author:Alexandre Dumas</Text>

    <Text style = {{marginTop:10,textAlign:'center'}}>The Three Musketeers is a novel by Alexandre Dumas. Set in the 17th century, it recounts the adventures of a young man named d'Artagnan after he leaves home to travel to Paris, to join the Musketeers of the Guard. D'Artagnan is not one of the musketeers of the title; those being his friends Athos, Porthos and Aramis, inseparable friends who live by the motto "all for one, one for all", a motto which is first put forth by d'Artagnan. In genre, The Three Musketeers is primarily a historical novel and adventure. However Dumas also frequently works into the plot various injustices, abuses and absurdities of the ancien regime, giving the novel an additional political aspect at a time when the debate in France between republicans and monarchists was still fierce. The story was first serialized from March to July 1844, during the July monarchy, four years before the French Revolution of 1848 violently established the second Republic. The author's father, Thomas-Alexandre Dumas had been a well-known general in France's Republican army during the French revolutionary wars. Although adaptations tend to portray d'Artagnan and the three musketeers as heroes, the novel portrays less appealing characters, who are willing to commit violence over slight insults and through unquestioning loyalty to the king and queen, and treat their servants and supposed social inferiors with contempt and violence.</Text>
      
      <Text style = {{marginTop:10,fontSize:15}}>Price:1450LKR</Text>
      <Text style = {{marginTop:10}}><u>Buy it</u></Text>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
      <Button color="#9900cc" title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
    </ScrollView>
  );
};
const To_Kill_a_Mockingbird = ({ navigation }) => {
  return (
    <ScrollView>
   <View style={{flex:1, flexDirection: "column", alignItems: 'center',backgroundColor:'#f9e6ff'}}>
      <Image style={{width: 300, height:450,marginTop:20}} 
    source={{uri:"https://images-na.ssl-images-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg"}}>
  </Image>
  <Text style = {{marginTop:10,fontSize:20}}>Author:Harper Lee</Text>

    <Text style = {{marginTop:10,textAlign:'center'}}>One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.</Text>
      
      <Text style = {{marginTop:10,fontSize:15}}>Price:1750LKR</Text>
      <Text style = {{marginTop:10}}><u>Buy it</u></Text>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
      <Button color="#9900cc" title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
    </ScrollView>
  );
};

const Watchmen = ({ navigation }) => {
  return (
    <ScrollView>
   <View style={{flex:1, flexDirection: "column",alignItems: 'center',backgroundColor:'#f9e6ff'}}>
      <Image style={{width: 300, height:450,marginTop:20}} 
    source={{uri:"https://images-na.ssl-images-amazon.com/images/I/410D4H0IqjL._SX318_BO1,204,203,200_.jpg"}}>
  </Image>
  <Text style = {{marginTop:10,fontSize:20}}>Author:Alan Moore</Text>

    <Text style = {{marginTop:10,textAlign:'center'}}>Considered the greatest graphic novel in the history of the medium, the Hugo Award-winning story chronicles the fall from grace of a group of superheroes plagued by all-too-human failings. Along the way, the concept of the superhero is dissected as an unknown assassin stalks the erstwhile heroes.

This edition of Watchmen, the groundbreaking series from Alan Moore, the award-winning author of V For Vendetta and Batman: The Killing Joke, features art from industry legend Dave Gibbons, with high-quality, recolored pages found in Watchmen: Absolute Edition.</Text>
      
      <Text style = {{marginTop:10,fontSize:15}}>Price:1200LKR</Text>
      <Text style = {{marginTop:10}}><u>Buy it</u></Text>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
      <Button color="#9900cc" title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
    </ScrollView>
  );
};





const Notifications = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: 'center'}}>
      <Text style={{textAlign:'center',paddingBottom: 7, paddingTop: 10, fontWeight: 'bold'}}>{'\u2B24'+' '}Litro 5 Kg available on Kalutara </Text>
      <Text style={{textAlign:'center',paddingBottom: 7,  paddingTop: 10, fontWeight: 'bold'}}>{'\u2B24'+' '}Laugfs 37.5 Kg available in Panadura</Text>
      <View style={{ flex: 1, padding:10, alignItems: 'center', paddingBottom: 30, justifyContent: 'flex-end' }}>
      <Button color="#bf4040" title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Book App" component={HomeScreen} />
          <Stack.Screen name="Registration" component={SignupScreen} />
          <Stack.Screen name="Registared" component={Signupsuccessfully}/>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          <Stack.Screen name="Action and Adventure" component={Action_and_Adventure} />
          <Stack.Screen name="Classics" component={Classics} />
          <Stack.Screen name="Comic Book" component={Comic} />
          <Stack.Screen name="Mystery Books" component={Mystery} />
          <Stack.Screen name="Horror" component={Horror} />
          <Stack.Screen name="Cook Books" component={Cook_Books} />
          <Stack.Screen name="Life of Pie" component={Life_of_pie} />
          <Stack.Screen name="The Three Musketeers" component={The_Three_Musketeers} />
          <Stack.Screen name="To Kill a Mockingbird" component={To_Kill_a_Mockingbird} />
          <Stack.Screen name="Watchmen" component={Watchmen} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
