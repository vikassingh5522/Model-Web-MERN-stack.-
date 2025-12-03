class Person {
    private String name;
    private int age;
    private String add;

    public Person(String name, int age, String add) {
        this.name = name;
        this.age = age;
        this.add = add;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", add='" + add + "'}";
    }
}

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("john", 30, "abc");
        Person person2 = new Person("doe", 25, "def");

        System.out.println(person1);
        System.out.println(person2);


        System.out.println("1,23,4,,");
    }
}



