import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import FontAwesome  from '@expo/vector-icons/FontAwesome';


export default class ScreenResults extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.props.computaVotos();        
        setTimeout( () => {this.props.backToStart(this.props.whoPressButton)} ,3000);//qdo passar 3s sia de ScreenResults
    }

    componentWillUnmount(){
        clearTimeout();
    }

    songGood = (bool) => {
        if(bool) {
            try {
                const { soundObject3, status3 } = Expo.Audio.Sound.create(
                    require('../assets/sounds/Aplausos.mp3'),
                    { shouldPlay: true }
                );
                // Your sound is playing!
            } catch (error) {
                // An error occurred!
            }
        }
    }

    // retorna se a pessoa ganhou ou perdeu
    winOrlose(boolean,votes, numPlayers){
       /* alert("Votos: "+votes+". Jogadores: "+numPlayers)*/
        if(numPlayers==6){
                if(boolean){ 

                    if(votes==5){
                        return( 
                            (<Text>
                                {this.songGood(boolean)}
                                <Text style={styles.resultText} >
                                    Arrasou!!!!!
                                </Text>
                            </Text>
                        ) );

                    }else if(votes==3){ //4 estrelas
                        return( 
                            (<Text>
                                {this.songGood(boolean)}
                                <Text style={styles.resultText} >
                                Uhul!!!!
                                </Text>
                                <Text style={styles.resultText}>
                                    
                                </Text>
                            </Text>
                        ) );           

                    }else if(votes==1){ // 3 estrelas
                        return( 
                            (<Text>
                                {this.songGood(boolean)}
                                <Text style={styles.resultText} >
                                    Mais ou Menos
                                </Text>
                                <Text style={styles.resultText}>
                                    
                                </Text>
                            </Text>
                        ) );
                    }
                }
            else{
                if(votes==-1){ //2 estrelas
                        return( 
                            (<Text>
                                <Text style={styles.resultText} >
                                    Hoje não!
                                </Text>
                                <Text style={styles.resultText}>
                                
                                </Text>
                            </Text>
                        ) );
                }else if(votes==-3){ //1 estrela
                        return( 
                            (<Text>
                                <Text style={styles.resultText} >
                                    It's been a long day... :(
                                </Text>
                                <Text style={styles.resultText}>
                                
                                </Text>
                            </Text>
                        ) );
                    }else if(votes==-5){ //0 estrela
                        return( 
                            (<Text>
                                <Text style={styles.resultText} >
                                    ;-;
                                </Text>
                                <Text style={styles.resultText}>
                                
                                </Text>
                            </Text>
                        ) );
                    }
                }
            }
        else if(numPlayers==5){
            if(boolean){
                if(votes==4){
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                                Arrasou!!!!!
                            </Text>
                        </Text>
                    ) );
                }else if(votes==2){
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                            Uhul!!!!
                            </Text>
                            <Text style={styles.resultText}>
                                
                            </Text>
                        </Text>
                    ) );
                }else{ //votes==0
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                                Mais ou Menos
                            </Text>
                            <Text style={styles.resultText}>
                                
                            </Text>
                        </Text>
                    ) );
                }
            }else{
                if(votes==-2){
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                Hoje não!
                            </Text>
                            <Text style={styles.resultText}>
                            
                            </Text>
                        </Text>
                    ) );
                }else if(votes==-4){
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                ;-;
                            </Text>
                            <Text style={styles.resultText}>
                            
                            </Text>
                        </Text>
                    ) );
                }else{ //votes==0
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                Mais ou Menos
                            </Text>
                            <Text style={styles.resultText}>
                                
                            </Text>
                        </Text>
                    ) );
                }

            }

        }else if(numPlayers==4){
            if(boolean){
                if(votes==3){
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                                Arrasou!!!!!
                            </Text>
                        </Text>
                    ) );
                }else if(votes==1){
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                            Uhul!!!!
                            </Text>
                            <Text style={styles.resultText}>
                                
                            </Text>
                        </Text>
                    ) );
                }
            }else{
                if(votes==-1){
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                Hoje não!
                            </Text>
                            <Text style={styles.resultText}>
                            
                            </Text>
                        </Text>
                    ) );
                }else if(votes==-3){
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                ;-;
                            </Text>
                            <Text style={styles.resultText}>
                            
                            </Text>
                        </Text>
                    ) );
                }
            }

        }else if(numPlayers==3){
            if(boolean){
                if(votes==2){
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                                Arrasou!!!!!
                            </Text>
                        </Text>
                    ) );
                }else{//votes==0
                    return( 
                        (<Text>
                            {this.songGood(boolean)}
                            <Text style={styles.resultText} >
                                Mais ou Menos
                            </Text>
                            <Text style={styles.resultText}>
                                
                            </Text>
                        </Text>
                    ) );
                }
            }else{
                if(votes==-2){
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                ;-;
                            </Text>
                            <Text style={styles.resultText}>
                            
                            </Text>
                        </Text>
                    ) );
                }else{//votes==0
                    return( 
                        (<Text>
                            <Text style={styles.resultText} >
                                Mais ou Menos
                            </Text>
                            <Text style={styles.resultText}>
                                
                            </Text>
                        </Text>
                    ) );
                }
                
            }
        }else if(numPlayers==2){
            if(votes==1){
                return( 
                    (<Text>
                        {this.songGood(boolean)}
                        <Text style={styles.resultText} >
                        Uhul!!!!
                        </Text>
                        <Text style={styles.resultText}>
                            
                        </Text>
                    </Text>
                ) );
            }else if(votes==-1){
                return( 
                    (<Text>
                        <Text style={styles.resultText} >
                            ;-;
                        </Text>
                        <Text style={styles.resultText}>
                        
                        </Text>
                    </Text>
                ) );
            }

        }
    }
    stars=(votes,numPlayers)=>{

        if(numPlayers==6){
            if(votes==5){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
            }else if(votes==3){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
            }else if(votes==1){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
                
            }else if(votes==-1){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
            }else if(votes==-3){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
                
            }else if(votes==-5){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',left:'2%'}}/>
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',left:'0%'}}/>    
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'6%',right:'2%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'0%',right:'0%'}}/> 
                    </View>
                );
            }
        }else if(numPlayers==5){
            if(votes==4){
                    return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'10%',left:'18%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',left:'16%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'10%',right:'14%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',right:'12%'}}/> 
                    </View>
                    );

            }else if(votes==2){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'10%',left:'18%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',left:'16%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'10%',right:'14%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',right:'12%'}}/> 
                    </View>
                    );
            }else if(votes==0){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'10%',left:'18%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',left:'16%'}}/>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'10%',right:'14%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',right:'12%'}}/> 
                    </View>
                    );
            }else if(votes==-2){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'10%',left:'18%'}}/>
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',left:'16%'}}/>    
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'10%',right:'14%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',right:'12%'}}/> 
                    </View>
                    );
            }else if(votes==-4){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'10%',left:'18%'}}/>
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',left:'16%'}}/>    
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'10%',right:'14%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'4%',right:'12%'}}/> 
                    </View>
                    );
            }

        }else if(numPlayers==4){
            if(votes==3){
                return(
                    <View style={styles.stars}>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                    </View>
                );
            }else if(votes==1){
                return(
                    <View style={styles.stars}>  
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                    </View>
                );
            }else if(votes==-1){
                return(
                    <View style={styles.stars}>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/> 
                    </View>
                );
            }else if(votes==-3){
                return(
                    <View style={styles.stars}>   
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'25%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'23%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'30%',left:'67%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'24%',left:'65%'}}/>  
                    </View>
                );
            }

        }else if(numPlayers==3){
            if(votes==2){
                return(
                    <View style={styles.stars}>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                    </View>
                    );
            }else if(votes==0){
                return(
                    <View style={styles.stars}>    
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                    </View>
                    );
            }else if(votes==-2){
                return(
                    <View style={styles.stars}>    
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'36%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'34%'}}/> 
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'34%',left:'55%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'28%',left:'53%'}}/> 
                    </View>
                    );
            }

        }else if(numPlayers==2){
            if(votes==1){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#F2C94C' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#A07800' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                    </View>
                );
            }else if(votes==-1){
                return(
                    <View style={styles.stars}>
                        <FontAwesome name='star' size={50} color='#BDBDBD' style={{flex:1,position:'absolute',bottom:'44%',left:'46%'}} />
                            <FontAwesome name='star' size={65} color='#828282' style={{zIndex:-1,flex:1,position:'absolute',bottom:'38%',left:'44%'}}/> 
                    </View>
                );
            }

        }
    }
    
    




    render(){
        let pontuacaoParcial = this.props.pontuacaoParcial;
        let stringColor = this.props.stringColor;
        let votes = this.props.votes;
        let whoPressButton = this.props.whoPressButton;
        let numPlayers = this.props.numPlayers;
        return(
            <View backgroundColor={stringColor[whoPressButton]} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                               
                <View style={{alignItems:'center',left:'0%',right:'0%',bottom:'65%',top:'15%',backgroundColor:'transparent',position:'absolute'}} >
                {this.winOrlose(this.props.winOrlose,votes,numPlayers)}
                </View>
                {this.stars(votes,numPlayers)}
                <View style={{alignItems:'center', left:'39%', right:'39%', top:'52.5%',bottom:'32%',backgroundColor:'transparent',position:'absolute'}}>
                    <Text style={[styles.resultText,{fontSize:40}]} >+{pontuacaoParcial[whoPressButton]}</Text>
                </View>
                <View style={{bottom:'0%', left:'40%',right:'40%',top:'90%',alignItems:'center',position:'absolute',flex:1}} >
                  {/* <Button title='Retornar' onPress={()=> this.props.backToStart(whoPressButton)} color='#000000'  /> */}
                </View>                    
                

            </View>
        );
    }



}

const styles = StyleSheet.create({
    welcome: {        
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight:'800',
        color: '#23BAA7',
        
      },
      resultText:{
        fontSize: 50,
        fontWeight:'bold',
        color:'#ffffff',
        textAlign: 'center',

      },
      stars:{
          flex:1,
          position:'absolute',
          left:'20%',
          top:'30%',
          right:'20%',
          bottom:'35%',
          backgroundColor:'transparent',    
      },

});