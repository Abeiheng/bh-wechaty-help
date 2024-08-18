<script setup lang="ts">
import usePermission from '@renderer/composables/usePermission'
const { getAllLogs, pageResult } = usePermission()
const handleCurrentChange =async (val: number) => {
  await getAllLogs(val)
}
await getAllLogs(1)
</script>

<template>
  <main class="flex-1 flex justify-between flex-col">
    <div>
      <el-table :data="pageResult?.data" border style="width: 100%">
        <el-table-column prop="logType" label="类型" width="180" align="center" :resizable="false" />
        <el-table-column prop="logContent" label="回复内容" align="center" :resizable="false" />
      </el-table>
    </div>
    <div class="flex justify-center py-3 bg-white shadow-lg rounded-lg mt-15 mb-10" style="flex-shrink: 0">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pageResult?.meta.total"
        @current-change="handleCurrentChange" />
    </div>
  </main>
</template>

<style lang="scss"></style>
