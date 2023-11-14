package gestionarxml;

import java.io.File;
import java.io.PrintStream;
import java.io.UnsupportedEncodingException;
import java.util.Scanner;
import org.w3c.dom.Document;

public class GestionarXML{
    public static void main(String[] args) {
        try {System.setOut(new PrintStream(System.out, true, "UTF-8"));}
        catch (UnsupportedEncodingException e) {System.out.println(e);}
        Scanner sc = new Scanner(System.in);
        //File con el XML
        File f = new File("builds.xml");
        //Crear el Doc
        AbrirDoc abrirDoc = new AbrirDoc();
        //Abrimos el XML en el Doc
        Document doc = abrirDoc.abrirDoc(f);
        
        LeerXML leerXML = new LeerXML();
        
        leerXML.mostrarLibros(doc);
        
    }
    
}
