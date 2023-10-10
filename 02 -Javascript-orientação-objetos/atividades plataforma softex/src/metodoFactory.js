
interface Computador {
  String getRAM();
  String getHDD();
  String getCPU();
  String getType();
  String toString();
}


class PC implements Computador {
  private String ram;
  private String hdd;
  private String cpu;
  
  public PC(String ram, String hdd, String cpu) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
  }
  
  @Override
  public String getRAM() {
      return ram + " GB";
  }
  
  @Override
  public String getHDD() {
      return hdd + " GB";
  }
  
  @Override
  public String getCPU() {
      return cpu + " GHz";
  }
  
  @Override
  public String getType() {
      return "PC";
  }
  
  @Override
  public String toString() {
      return "PC - RAM: " + getRAM() + ", HDD: " + getHDD() + ", CPU: " + getCPU();
  }
}


class Server implements Computador {
  private String ram;
  private String hdd;
  private String cpu;
  
  public Server(String ram, String hdd, String cpu) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
  }
  
  @Override
  public String getRAM() {
      return ram + " GB";
  }
  
  @Override
  public String getHDD() {
      return hdd + " GB";
  }
  
  @Override
  public String getCPU() {
      return cpu + " GHz";
  }
  
  @Override
  public String getType() {
      return "Server";
  }
  
  @Override
  public String toString() {
      return "Server - RAM: " + getRAM() + ", HDD: " + getHDD() + ", CPU: " + getCPU();
  }
}


interface ComputadorFactory {
  Computador criarComputador(String ram, String hdd, String cpu);
}


class PCFactory implements ComputadorFactory {
  @Override
  public Computador criarComputador(String ram, String hdd, String cpu) {
      return new PC(ram, hdd, cpu);
  }
}


class ServerFactory implements ComputadorFactory {
  @Override
  public Computador criarComputador(String ram, String hdd, String cpu) {
      return new Server(ram, hdd, cpu);
  }
}

public class Main {
  public static void main(String[] args) {
      ComputadorFactory pcFactory = new PCFactory();
      ComputadorFactory serverFactory = new ServerFactory();

      ComputadorMeuPC = pcFactory.criarComputador("8", "512", "3.4");
      ComputadorMeuServidor = serverFactory.criarComputador("32", "2000", "2.2");

      System.out.println(meuPC);
      System.out.println(meuServidor);
  }
}