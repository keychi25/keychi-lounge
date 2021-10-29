import Link from "next/link";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const SkillTable = () => {
  return (
    <>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>取得資格</Th>
            <Th>取得日時</Th>
            <Th>備考/感想</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>基本情報技術者試験</Td>
            <Td>2017/4（学部2年春）</Td>
            <Td>/</Td>
          </Tr>
          <Tr>
            <Td>
              Ruby Association Certified Ruby Programmer Silver version 2.1
            </Td>
            <Td>2021/5（修士2年春）</Td>
            <Td>
              業務で使うらしいから勉強した。
              <Link href="https://www.ruby.or.jp/ja/certification/examination/">
                <a>（こちら）</a>
              </Link>
            </Td>
          </Tr>
          <Tr>
            <Td>Ruby Association Certified Ruby Programmer Gold version 2.1</Td>
            <Td>2021/6（修士2年春）</Td>
            <Td>
              業務で使うらしいから勉強した。
              <Link href="https://www.ruby.or.jp/ja/certification/examination/">
                <a>（こちら）</a>
              </Link>
            </Td>
          </Tr>
          <Tr>
            <Td>高等学校教諭一種免許状（情報）</Td>
            <Td>2022/3（修士2年終了時）</Td>
            <Td>/</Td>
          </Tr>
          <Tr>
            <Td>高等学校教諭一種免許状（数学）</Td>
            <Td>2022/3（修士2年終了時）</Td>
            <Td>/</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default SkillTable;
