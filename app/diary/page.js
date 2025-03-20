"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { Plus, Trash2, Edit, Save } from "lucide-react"

export default function DiaryPage() {
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState({ title: "", content: "" })
  const [isEditing, setIsEditing] = useState(null)
  const [editingEntry, setEditingEntry] = useState({ title: "", content: "" })

  useEffect(() => {
    // Load entries from localStorage on component mount
    const savedEntries = localStorage.getItem('diaryEntries')
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries))
    }
  }, [])

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries))
  }, [entries])

  const handleNewEntry = (e) => {
    e.preventDefault()
    
    const newEntryObj = {
      id: Date.now(), // Use timestamp as a simple unique ID
      title: newEntry.title,
      content: newEntry.content,
      created_at: new Date().toISOString(),
    }

    setEntries([newEntryObj, ...entries])
    setNewEntry({ title: "", content: "" })
  }

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id))
  }

  const handleEdit = (entry) => {
    setIsEditing(entry.id)
    setEditingEntry({ title: entry.title, content: entry.content })
  }

  const handleSaveEdit = (id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id
          ? { ...entry, title: editingEntry.title, content: editingEntry.content }
          : entry
      )
    )
    setIsEditing(null)
  }

  return (
    <div className="container py-8 space-y-8">
      {/* New Entry Form */}
      <Card className="p-6 glass-effect">
        <form onSubmit={handleNewEntry} className="space-y-4">
          <div className="flex items-center space-x-2">
            <Plus className="w-5 h-5 text-primary" />
            <Input
              type="text"
              placeholder="Entry Title..."
              value={newEntry.title}
              onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              className="glass-effect text-lg font-medium"
              required
            />
          </div>
          <Textarea
            placeholder="Write your thoughts..."
            value={newEntry.content}
            onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
            className="glass-effect min-h-[200px] text-muted-foreground"
            required
          />
          <Button type="submit" className="button-glow">
            Save Entry
          </Button>
        </form>
      </Card>

      {/* Entries List */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="p-6 glass-effect hover:shadow-lg transition-all">
            {isEditing === entry.id ? (
              <div className="space-y-4">
                <Input
                  type="text"
                  value={editingEntry.title}
                  onChange={(e) =>
                    setEditingEntry({ ...editingEntry, title: e.target.value })
                  }
                  className="glass-effect text-lg font-medium"
                />
                <Textarea
                  value={editingEntry.content}
                  onChange={(e) =>
                    setEditingEntry({ ...editingEntry, content: e.target.value })
                  }
                  className="glass-effect min-h-[150px]"
                />
                <div className="flex justify-end space-x-2">
                  <Button
                    onClick={() => setIsEditing(null)}
                    variant="outline"
                    size="sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleSaveEdit(entry.id)}
                    size="sm"
                    className="button-glow"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">{entry.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(entry)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {entry.content}
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  {format(new Date(entry.created_at), "MMM d, yyyy 'at' h:mm a")}
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
} 