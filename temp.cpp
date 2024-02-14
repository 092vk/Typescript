#include<iostream>

using namespace std;

int main(){
    for(int i=0;i<3;i++){
        for(int j=0;j<4;j++){
            if(i==1){
                cout<<"hello"<<endl;
                break;}
        }
        cout<<i<<endl;
    }
return 0;
}

// conclusion of this file is that when we use break statement it removes us from one loop only and not from all the nested loops 

