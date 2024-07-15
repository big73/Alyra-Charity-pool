import { Tabs, TabList, Tab, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const colors = useColorModeValue(
    ["blue.50", "blue.50", "blue.50"],
    ["blue.900", "blue.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];
  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>
          <Link href="/">Accueil</Link>
        </Tab>
        <Tab>
          <Link href="/indecrement">Indecrement</Link>
        </Tab>
        <Tab>
        <Link href="/proposal">DAO</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}
