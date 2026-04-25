class Solution {
    public String convert(String s, int numRows) {
        if(numRows ==1 )
            return s;
        int current=0,dir=1;
        String[] str = new String[numRows];
        for(int i=0; i<numRows; i++)
            str[i]= new String();

        for(int i=0; i< s.length(); i++){
            
            if(current == numRows-1)
                dir = -1;
            else if (current ==0)
                dir = 1;
            str[current]= str[current]+s.charAt(i);
            current+=dir;
        }
        String res = "";
        for(int i=0; i<numRows; i++)
            res+=str[i];
            System.out.println(res);
        return res;
    }
}