
public class Person {
	private String name;
	private int height;
	private int repeat;
	
	public Person(String name, int height,int repeat){
		this.name = name;
		this.height = height;
		this.repeat = repeat;
	}
	
	public void print_name_height(){
		for(int x=0;x<repeat;x++){
			System.out.println(name);
			System.out.println(height);
			if(x>=5){
				System.out.println("Do you really need to see it more times ?");

			}
		}
	}
	
}
