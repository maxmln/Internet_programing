
public class PersonTest {

	public static void main(String[] args) {
		Person Max = new Person("Max",187,6);
		Person John = new Person("John",178,5);
		
		Max.print_name_height();
		John.print_name_height();
		System.out.println(Max.equals(John));
	}

}
