"use client";
import ButtonCreate from "@/components/Admin/ButtonCreate";
import { Button, ConfigProvider, Space, Table, Tag } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import Column from "antd/es/table/Column";
import * as React from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const data: any = [
  {
    user_id: "1",
    name: "Nguyen Minh Quang",
    email: "nmquang@gmail.com",
    gender: "name",
    address: "ThuyDuyen ThaiThuy ThaiBinh",
    phone: "0987654321",
    avatar:
      "https://mir-s3-cdn-cf.behance.net/projects/404/2d5247173291955.Y3JvcCwxMDgwLDg0NCwwLDU5MA.png",
    status: 1,
    createAt: "2022-10-01 00:00:00",
  },
];
export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <div className="text-lg">
      <div className="p-4 flex justify-between font-medium items-center w-full ">
        <h1 className="text-xl  underline">Danh sách người dùng</h1>
        <button className="w-max flex items-center text-lg   gap-2 border-gray-600 hover:text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500  rounded-xl p-2 border   ">
          <FaPlus />
          Thêm mới
        </button>
      </div>
      <Table
        pagination={{ pageSize: 10 }}
        rowKey="user_id"
        dataSource={data}
      >
        <Column width={100} title="ID" dataIndex="user_id" key="user_id" />
        <Column title="Tên tài khoản" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Địa chỉ" dataIndex="address" key="address" />
        <Column title="SDT" dataIndex="phone" key="phone" />
        <Column
          title="Avatar"
          dataIndex="avatar"
          key="avatar"
          render={(url: string) => (
            <img width={100} className="object-cover" src={url} alt="avatar" />
          )}
        />
        <Column
          title="Trạng thái"
          dataIndex="status"
          key="status"
          render={(status: number) => (
            <Tag color={status === 1 ? "green" : "red"}>
              {status === 1 ? "Active" : "Khoá mõm"}
            </Tag>
          )}
        />
        {/* <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags: string[]) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? "geekblue" : "green";
                if (tag === "loser") {
                  color = "volcano";
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        /> */}
        <Column
          title="Action"
          key="action"
          render={(_: any, record: DataSourceItemType) => (
            <Space>
              <Button
                type="primary"
                color="red"
                danger
                size="large"
                icon={<MdDelete />}
              />
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: "green",
                    },
                  },
                }}
              >
                <Button type="primary" size="large" icon={<FaPencilAlt />} />
              </ConfigProvider>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
