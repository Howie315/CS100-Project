#include <iostream>
#include <string>
using namespace std;


class dogClass
{
private:
    int age;
    string gender ;
    string breed;
    string name;
public:
    dogClass(int, string, string, string);
    int getAge();
    string getGender();
    string getBreed();
    string getName();
    
};

dogClass::dogClass(int age, string gender, string breed, string name){
    this->age = age;
    this->gender = gender;
    this->breed = breed;
    this->name = name;
}
int dogClass::getAge(){
    return this->age;
}
string dogClass::getGender(){
    return this->gender;
}
string dogClass::getBreed(){
    return this->breed;
}
string dogClass::getName(){
    return this->name;
}

