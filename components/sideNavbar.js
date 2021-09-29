import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Stack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

export default function SideNavbar({ ...rest }) {
  const { asPath } = useRouter();
  const IconGrid = (props) => (
    <Icon {...props}>
      <path
        fill="currentColor"
        d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zM4 8V4h4v4H4zm10 12h-4v-4h4v4zm0-6h-4v-4h4v4zm-4-6V4h4v4h-4zm10 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"
      />
    </Icon>
  );

  const IconUser = (props) => (
    <Icon {...props}>
      <path
        fill="currentColor"
        d="M21 20a1 1 0 01-2 0c0-2.757-2.243-5-5-5h-4c-2.757 0-5 2.243-5 5a1 1 0 01-2 0c0-3.859 3.14-7 7-7h4c3.859 0 7 3.141 7 7zM12 4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-2a5 5 0 11-.001 10.001A5 5 0 0112 2z"
      />
    </Icon>
  );

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w="64"
      h="100%"
      pos="fixed"
      {...rest}
    >
      <Flex h="16" alignItems="center" mx="6" justifyContent="space-between">
        <Text fontSize="xl" fontFamily="serif" fontWeight="bold">
          UCCI Pegadaian
        </Text>
      </Flex>
      <Stack direction="column" spacing={0} py={2}>
        <Text px={4} pt={2} color="gray" fontSize="sm" fontWeight="semibold">
          General
        </Text>
        <HStack
          cursor="pointer"
          spacing={2}
          px={4}
          py={2}
          color={asPath !== "/view/account" ? "#5AC421" : "gray"}
          onClick={async () => {
            await Router.push("/");
          }}
        >
          <Box>
            <IconGrid cursor="pointer" style={{ marginTop: "-5px" }} />
          </Box>
          <Text>Home</Text>
        </HStack>
        <HStack
          cursor="pointer"
          spacing={2}
          px={4}
          py={2}
          color={asPath === "/view/account" ? "#5AC421" : "gray"}
          onClick={() => {
            Router.push("/view/account");
          }}
        >
          <Box>
            <IconUser cursor="pointer" style={{ marginTop: "-5px" }} />
          </Box>
          <Text>Profile</Text>
        </HStack>
      </Stack>
    </Box>
  );
}
