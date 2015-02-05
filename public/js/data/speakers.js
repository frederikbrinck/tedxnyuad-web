var speakersArray =  [{
                  name:'Amer Nasr',
                  id:1,                  
                  year:'Freshman',
                  origin:'Brazil',
                  srcScreen:'/images/speakers/module/amer.jpg',
                  srcThumb:'/images/speakers/module/amer-thumb.jpg', 
                  topic:'Developing methods to empower students to have a voice.',
                  text:'<p>Developing methods to empower students to have a voice.</p>'
                  },
                  {name:'Attilio Rigotti',
                  id:2,            
                  year:'Alumni',
                  origin:'Chile',
                  srcScreen:'/images/speakers/module/attilio.jpg',
                  srcThumb:'/images/speakers/module/attilio-thumb.jpg',
                  topic:'Choice, interactivity, heroes and their importance in the arts',
                  text:'<p>Growing up, video games gave me the chance to be a hero. By making decisions that had consequences, I felt that, for the first time, I mattered. I believe art can share that feeling by combining performance and interactivity, creating experiences for people to take action and feel needed.</p>'
                  },
                  {name:'Charlotte de Bekker',
                  id:3,        
                  year:'Sophomore',
                  origin:'United Kingdom',
                  srcScreen:'/images/speakers/module/charlotte.jpg',
                  srcThumb:'/images/speakers/module/charlotte-thumb.jpg',
                  topic:'Authenticity',
                  text:'<p>In the midst of my hipster angst I was faced with the tragic realisation that my attempts at authenticity were futile. With the help of IKEA furniture, Dutch flea markets, and the image of Dubai, I take a closer look at the irony of constructing authenticity. </p>'
                  },
                  {name:'Hayat Muhammed Seid',               
                  id:4,        
                  year:'Sophomore',
                  origin:'Ethiopia',
                  srcScreen:'/images/speakers/module/hayat.jpg',
                  srcThumb:'/images/speakers/module/hayat-thumb.jpg',
                  topic:'Finding voices and sharing stories',
                  text:'<p>It is about PenAfrica, an organization I co-founded, that aims to tell African stories with a current focus on the use of a Children’s book series.</p>'
                  },
                  {name:'Jovan Jovancevic',
                  id:5,           
                  year:'Freshman',
                  origin:'Montenegro',
                  srcScreen:'/images/speakers/module/jovan.jpg',
                  srcThumb:'/images/speakers/module/jovan-thumb.jpg',
                  topic:'Blindfold Chess',
                  text:'<p>The goal of my talk is to raise awareness and teach training methods connected to playing blindfold chess. While I can speak from personal experience, the audience will get a supreme exercise to stimulate their memory and visualization skills.</p>'
                  },
                  {name:'Maitha Al Memari',
                  id:6,           
                  year:'Freshman',
                  origin:'United Arab Emirates',
                  srcScreen:'/images/speakers/module/maitha.jpg',
                  srcThumb:'/images/speakers/module/maitha-thumb.jpg',
                  topic:'The meaning, value, concept and evolution of the Abaya',
                  text:'<p>The interaction with my new community at university has led me to realize the lack of common knowledge about the Abaya and what it symbolizes. Through my talk, I aim to change the perspective and negative connotations that come with the Abaya and clarify what it means to the Arab culture and me.</p>'
                  },
                  {name:'Meera Al Agroobi',
                  id:7,           
                  year:'Graduate',                               
                  origin:'United Arab Emirates',                    
                  srcScreen:'/images/speakers/module/meera.jpg',      
                  srcThumb:'/images/speakers/module/meera-thumb.jpg',
                  topic:'A talk for social change within schools in the UAE based on my high school experience',
                  text:'<p>I am going to share my story as a high school bully. I\'m going to generally talk about how bullies are dealt with in schools and the lack of value placed on social workers within the UAE. I\'m also going to touch on the stereotypical idea people have of bullies and I\'m going to explain how people can understand bullies through understanding the Jokers character. Finally, I\'m going to make suggestions for new approaches and interventions to deal with bullies. </p>'
                  },
                  {name:'Mohit Mandal',
                  id:8,
                  year:'Senior',
                  origin:'India/Bangladesh',
                  srcScreen:'/images/speakers/module/mohit.jpg',
                  srcThumb:'/images/speakers/module/mohit-thumb.jpg',
                  topic:'Street-cricket with Strangers',
                  text:'<p>In spring of sophomore year, I played street-cricket with a group of Pakistani, Indian and Bangladeshi hairdressers in the abandoned parking lot of a mall in Abu Dhabi. They are only a few of the several millions of migrant workers in the Gulf whose rich stories, sadly, go untold.</p>'    
                  },
                  {name:'Nikolai Kozak',
                  id:9,              
                  year:'Senior',
                  origin:'Chile/Argentina',
                  srcScreen:'/images/speakers/module/nikolai.jpg',
                  srcThumb:'/images/speakers/module/nikolai-thumb.jpg',
                  topic:'Collective Mnemonics',
                  text:'<p>A story about my father, my country, art, family, human rights, the future of our generation, and how to fix pretty much every problem in the world by understanding collective mnemonics - the memory we share and create collectively.</p>'},
                  {name:'Samuel Ridgeway',
                  id:10,            
                  year:'Junior',
                  origin:'United Kingdom',
                  srcScreen:'/images/speakers/module/samuel.jpg',
                  srcThumb:'/images/speakers/module/samuel-thumb.jpg',
                  topic:'Finding Home: From leaving home to discovering a new one',
                  text:'<p>It’s interesting that home has become such a buzzword, especially in NYUAD. People have their own definition of home. My story describes how I came to accept having more than one home and questions the limits of home being only a place. </p>'
                  },
                  {name:'Sara Al Shamlan',
                  id:11,            
                  year:'Senior',
                  origin:'Qatar',
                  srcScreen:'/images/speakers/module/sara.jpg',
                  srcThumb:'/images/speakers/module/sara-thumb.jpg',
                  topic:'Re-evaluating happiness',
                  text:'<p>I have grown up with a desire and passion to help people around me. At a very young age I came to a great realization that has made me live each day happier and more appreciative of everything.  I realized that I had to reevaluate my take on happiness when I was exposed to a community that had nothing yet their hardship did not prevent them from being happy and thankful.</p>'
                  },                              
                  {name:'Vasily Rudchenko',
                  id:12,           
                  year:'Sophomore',
                  origin:'Ukraine',
                  srcScreen:'/images/speakers/module/vasily.jpg',                   
                  srcThumb:'/images/speakers/module/vasily-thumb.jpg',
                  topic:'Helping engineers tackle real problems to create useful technological solutions',
                  text:'<p>Engineers are known for creating cool technology without a problem that would justify its existence. I am working on a team of NYUAD engineers, who are solving an existing problem in a national park in the UAE by tackling it through a human-centered approach, rather than a strictly technological mindset.</p>'
                }];


exports = module.exports = {
                        content: [{ template:'speakers',
                                    macro:'standard',
                                    arguments:{ 
                                        speakers: speakersArray,
                                        arrangement: rowSetup(speakersArray.length),
                                        speakerRows: speakerArrangement(speakersArray, rowSetup(speakersArray.length))
                                              }
                                  },
                                  { template:'panorama',
                                    macro:'standard',
                                    arguments:{src:'venue.jpg',
                                               text:'<h4>Venue</h4>TEDxNYUAD 2015 will take place in the modern Conference Center at the new campus of New York University Abu Dhabi.'
                                              }
                                  }],
                        speakers: speakersArray};

function rowSetup(numOfSpeakers){
  switch(numOfSpeakers){
    case 0:
      break;
    case 1:
      return [1];
      break;
    case 2:
      return [2];
      break;
    case 3:
      return [3];
      break;
    case 4:
      return [4];
      break;
    case 5:
      return [3,2];
      break;
    case 6:
      return [3,3];
      break;
    case 7:
      return [4,3];
      break;
    case 8:
      return [3,2,3];
      break;
    case 9:
      return [3,3,3];
      break;
    case 10:
      return [3,4,3];
      break;
    case 11:
      return [4,3,4]
      break;
    case 12:
      return [4,4,4];
      break;
    case 13:
      return [3,4,3,3];
      break;
    case 14:
      return [4,3,4,3];
      break;
    case 15:
      return [3,4,3,2,3];
      break;
    case 16:
      return [4,3,4,3,2];
      break;
    case 17:
      return [3,4,3,4,3];
      break;
    case 18:
      return [4,3,4,3,4];
      break;
    case 19:
      return [3,4,3,4,3,2];
      break;
    case 20:
      return [3,4,3,4,3,3];
      break;
    default:
      return [numOfSpeakers];
  }
}

function speakerArrangement(immutableSpeakersArray, arrangementArray){
  var speakerList = [];
  var speakersArray = immutableSpeakersArray.slice();
  for (num in arrangementArray) {
    var internalList = [];
    switch(arrangementArray[num]){
      case 2:
        var bsClass = 6;
        break;
      case 3:
        var bsClass = 4;
        break;
      case 4:
        var bsClass = 3;
      default:
        var bsClass = 12/arrangementArray[num];
    }
    for(var speaker = 0;speaker < arrangementArray[num]; speaker++){
      internalList.push(speakersArray[0]);
      internalList[speaker]["bsClass"] = bsClass;
      speakersArray.shift();
    }
    speakerList.push(internalList);
  }
  return speakerList;
}