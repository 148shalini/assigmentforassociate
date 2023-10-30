// 1.	JAVA
// A.	Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

    public class ArrayShuffler {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int n = arr.length;

        for (int i = n - 1; i > 0; i--) {
            
            int j = i;
            while (j == i) {
                j = (int) (Math.random() * (i + 1)); 
            }

            // Swap the elements at indices i and j
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
