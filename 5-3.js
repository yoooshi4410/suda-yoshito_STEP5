//設問1
let x=5;宣言された変数はブロックスコープを持つ。
const name='jhon';宣言された変数はブロックスコープを持つ。再代入不可。
var number=1;宣言された変数は関数スコープを持つ。再代入可能。

//設問2
      let name="daniel";
      let age=23;
      let isStudent=true;
      let car=null;

//設問3
      let price=10;
      let taxRate=0.1;
      let totalprice=price*(1+taxRate);
      console.log(totalprice)

//設問4
      let isLogged=true;
      if(isLogged){
      console.log("Welcome back!");
      }else{
      console.log("Please log in.");
      }

//設問5
    let firstName="田中";
      let lastName="太郎";
      let fullName=firstName+lastName;//+演算子を使用した文字列結合
      console.log(fullName);
      
      let fullName2='${firstName}${lastName}';//テンプレートリテラルによる文字列結合/
      console.log('${fullName2}');

//設問6 @が含まれているかどうか
　　　let email=user@cytech.com
　　　let isValidEmail=email.includes('@');
       console.log(isValidEmail);
      

      example.comに置換
      let newEmail=email.replace('cytech','example')
      console.log(newEmail);

//@で分割してユーザー名とドメインを個別に出力
　　　let emailPart=email.split("@");
      console.log("ユーザー名:",emailPart[0]);
      console.log("ドメイン:"emailPart[1]);
      

