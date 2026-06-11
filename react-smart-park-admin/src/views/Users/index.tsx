import { batchDeleteUserApi, editUserApi, getUserListApi } from '@/api/user'
import UserForm from '@/components/users/UserForm'
import useAppRequest from '@/hooks/useAppRequest'
import type {
  UserListRequestType,
  UserListResponseType,
  UserQueryParams
} from '@/types/user'
import type { FormProps, TableProps } from 'antd'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Popconfirm,
  Row,
  Space,
  Table
} from 'antd'
import { useEffect, useState } from 'react'
import { getColumns } from './getColumns'

const Users = () => {
  const [form] = Form.useForm<UserQueryParams>()
  const values = Form.useWatch([], form)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const disabled =
    !values?.companyName &&
    !values?.contact &&
    !values?.tel &&
    selectedRowKeys.length === 0
  const [requestParams, setRequestParams] = useState<UserListRequestType>({
    companyName: '',
    contact: '',
    tel: '',
    pageNum: 1,
    pageSize: 10
  })
  const [dataSource, setDataSource] = useState<UserListResponseType[]>([])
  const [total, setTotal] = useState(0)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('新增企业')
  const [currentRecord, setCurrentRecord] = useState<
    UserListResponseType | undefined
  >()

  const {
    run: getUserList,
    refresh,
    loading
  } = useAppRequest(getUserListApi, {
    manual: true,
    onSuccess: (res) => {
      setDataSource(res.data.list)
      setTotal(res.data.total)
    }
  })

  const columns = getColumns(refresh, setTitle, setOpen, setCurrentRecord)

  const { run: batchDelete } = useAppRequest(batchDeleteUserApi, {
    manual: true,
    onSuccess: () => {
      setSelectedRowKeys([])
      refresh()
    }
  })

  const { run: editUser } = useAppRequest(editUserApi, {
    manual: true,
    onSuccess: () => {
      setOpen(false)
      refresh()
    }
  })

  const onFinish: FormProps<UserQueryParams>['onFinish'] = (values) => {
    setRequestParams((prev) => ({
      ...prev,
      ...values
    }))
  }
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  useEffect(() => {
    getUserList(requestParams)
  }, [requestParams, getUserList])
  const rowSelection: TableProps<UserListResponseType>['rowSelection'] = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const reset = () => {
    form.resetFields()
    setSelectedRowKeys([])
    setRequestParams({
      companyName: '',
      contact: '',
      tel: '',
      pageNum: 1,
      pageSize: 10
    })
  }

  const handleAdd = () => {
    setCurrentRecord(undefined)
    setOpen(true)
    setTitle('新增企业')
  }

  const handleSubmit = (values: UserListResponseType) => {
    editUser(values)
  }

  const handleDisable = () => {
    setOpen(false)
    setCurrentRecord(undefined)
  }

  return (
    <>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Card>
            <Form
              form={form}
              layout="inline"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ companyName: '', contact: '', tel: '' }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<UserQueryParams> label="企业名称" name="companyName">
                <Input />
              </Form.Item>

              <Form.Item<UserQueryParams> label="联系人" name="contact">
                <Input />
              </Form.Item>

              <Form.Item<UserQueryParams> label="联系电话" name="tel">
                <Input />
              </Form.Item>

              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" disabled={disabled}>
                    查询
                  </Button>
                  <Button disabled={disabled} onClick={reset}>
                    重置
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Space>
              <Button type="primary" onClick={handleAdd}>
                新增企业
              </Button>
              <Popconfirm
                title="确定删除选中的用户吗？"
                onConfirm={() => batchDelete(selectedRowKeys)}
              >
                <Button danger disabled={selectedRowKeys.length === 0}>
                  批量删除
                </Button>
              </Popconfirm>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Table<UserListResponseType>
              columns={columns}
              dataSource={dataSource}
              rowKey={(record) => record.id}
              loading={loading}
              rowSelection={rowSelection}
              scroll={{ x: 'max-content', y: 500 }}
              pagination={{
                total,
                showTotal: (total) => `共 ${total} 条`,
                showSizeChanger: true,
                showQuickJumper: true,
                current: requestParams.pageNum,
                pageSize: requestParams.pageSize,
                onChange: (page, pageSize) => {
                  setRequestParams((prev) => ({
                    ...prev,
                    pageNum: page,
                    pageSize
                  }))
                }
              }}
            />
          </Card>
        </Col>
      </Row>
      <UserForm
        title={title}
        open={open}
        initialValues={currentRecord}
        onDisable={handleDisable}
        onSubmit={handleSubmit}
      />
    </>
  )
}
export default Users
