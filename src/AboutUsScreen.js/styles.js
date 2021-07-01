import color from "../Color/Color";

const styles = {
  main:{
    flex: 1,
    backgroundColor: color.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
card:{
  borderRadius: 20,
  width: 300,
  height: 500,
  backgroundColor: color.card,
},
row:{
marginTop:5
},
  title: {
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 5,
  },
  description: {
    fontSize: 9,
  },
  line: {
    height: 1,
    borderWidth: 1,
    borderColor: '#0001',
    width: 250,
    marginTop: 10,
  },
  textinputstyle:{
    
  }
};

export default styles;
