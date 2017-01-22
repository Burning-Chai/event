#define pin 5

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(A0, INPUT);
  pinMode(pin, OUTPUT);
  Serial.begin(9600);
}
 
// the loop function runs over and over again forever
void loop() {
  int data = Serial.read();  
  if (data == (int)('0')) {
    analogWrite(pin, 0);
  } else if (data == (int)('1')) {
    analogWrite(5, 51);
  } else if (data == (int)('2')) {
    analogWrite(5, 102); 
  } else if (data == (int)('3')) {
    analogWrite(5, 153);  
  } else if (data == (int)('4')) {
    analogWrite(5, 204);
  } else if (data == (int)('5')) {
    analogWrite(5, 255);
  }

  if (digitalRead(A0) == HIGH) {
    while(digitalRead(A0) == HIGH) {
    }
    Serial.write('B');
  }

}

