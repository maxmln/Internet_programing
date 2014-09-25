import java.util.Scanner;


public class onlyCapitals {
	public static void main(String[] args){
		Scanner user_input = new Scanner(System.in);
		String inputText;
		String upperCasedInputText;
		
		inputText = user_input.next();
		upperCasedInputText = inputText.toUpperCase();
		System.out.println(upperCasedInputText);
	}
}
