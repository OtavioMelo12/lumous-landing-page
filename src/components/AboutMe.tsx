import { Card, CardDescription, CardTitle } from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const AboutMe = () => {
  return (
    <Card className=" w-full max-w-md ml-auto transform rounded-2xl px-4 py-2 shadow-lg duration-300 hover:scale-105 md:p-4">
      <div className="-mt-16 flex justify-end">
        <Avatar className="h-20 w-20 border-4">
          <AvatarImage
            alt="@_otavio_melo"
            className=""
            src={'https://github.com/OtavioMelo12.png'}
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-muted-foreground text-sm">Sobre mim!</span>
      <CardTitle className="mt-2 text-2xl md:mt-0 md:text-3xl">
        Otávio Melo
      </CardTitle>
      <span className="text-sm text-orange-300 dark:text-orange-300">
        Engenheiro de Controle e Automação
      </span>
      <CardDescription className="text-gl mt-2 text-muted-foreground">
        Formado em Engenharia de Controle e Automação pela Universidade Federal
        de Lavras (UFLA). Conhecimentos em automação residencial, sistemas
        embarcados, IoT, programação, entre outros.
      </CardDescription>
      <br />
    </Card>
  );
};
